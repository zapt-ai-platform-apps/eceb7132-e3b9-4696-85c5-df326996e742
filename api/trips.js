import { trips } from '../drizzle/schema.js';
import { authenticateUser } from './_apiUtils.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq, desc } from 'drizzle-orm';

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    if (req.method === 'GET') {
      const result = await db.select()
        .from(trips)
        .where(eq(trips.userId, user.id))
        .orderBy(desc(trips.createdAt));

      res.status(200).json(result);
    } else if (req.method === 'POST') {
      const { name, destination } = req.body;
      if (!name || !destination) {
        return res.status(400).json({ error: 'Name and destination are required' });
      }

      const result = await db.insert(trips).values({
        name,
        destination,
        userId: user.id
      }).returning();

      res.status(201).json(result[0]);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error);
    if (error.message.includes('Authorization') || error.message.includes('token')) {
      res.status(401).json({ error: 'Authentication failed' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}