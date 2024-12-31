import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    setLoading(true);
    try {
      const token = (await supabase.auth.getSession()).data.session.access_token;

      const response = await fetch('/api/trips', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const data = await response.json();
      setTrips(data);
    } catch (error) {
      console.error('Error fetching trips:', error);
      alert('Error fetching trips');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading trips...</p>;
  }

  if (trips.length === 0) {
    return <p>No trips found.</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Your Trips</h3>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id} className="mb-4 p-4 border rounded">
            <h4 className="text-lg font-semibold">{trip.name}</h4>
            <p>Destination: {trip.destination}</p>
            <p>Created At: {new Date(trip.created_at).toLocaleDateString()}</p>
            {/* Additional trip details and actions can be added here */}
          </li>
        ))}
      </ul>
    </div>
  );
}