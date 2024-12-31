import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import TripList from './components/TripList';
import CreateTrip from './components/CreateTrip';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark font-sans flex flex-col">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Group Travel Planner</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        {!session ? (
          <div>
            <p className="mb-4">
              Sign in with <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">ZAPT</a>
            </p>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google', 'facebook', 'apple']}
            />
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Welcome, {session.user.email}</h2>
            <CreateTrip />
            <TripList />
            <button
              className="mt-4 bg-secondary hover:bg-secondary-dark text-white font-medium py-2 px-4 rounded cursor-pointer"
              onClick={() => supabase.auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        )}
      </main>
      <footer className="bg-neutral DEFAULT text-neutral-dark py-4">
        <div className="container mx-auto px-4 text-center">
          Made on <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">ZAPT</a>
        </div>
      </footer>
    </div>
  );
}