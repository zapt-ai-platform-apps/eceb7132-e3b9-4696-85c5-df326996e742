import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const trips = pgTable('trips', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  destination: text('destination').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  userId: uuid('user_id').notNull(),
});

// Export other tables if needed