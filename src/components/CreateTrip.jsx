import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function CreateTrip() {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateTrip = async () => {
    if (!tripName || !destination) {
      alert('Please enter trip name and destination.');
      return;
    }
    setLoading(true);
    try {
      const token = (await supabase.auth.getSession()).data.session.access_token;

      const response = await fetch('/api/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: tripName, destination })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      setTripName('');
      setDestination('');
      alert('Trip created successfully!');
    } catch (error) {
      console.error('Error creating trip:', error);
      alert('Error creating trip');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Create New Trip</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Trip Name</label>
        <input
          type="text"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          className="w-full px-3 py-2 border rounded box-border"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full px-3 py-2 border rounded box-border"
        />
      </div>
      <button
        className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded cursor-pointer"
        onClick={handleCreateTrip}
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Trip'}
      </button>
    </div>
  );
}