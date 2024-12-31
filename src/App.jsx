import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark font-sans">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Group Travel Planner</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Group Travel App</h2>
        <p className="mb-6">Plan your trips together with ease.</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded cursor-pointer">
          Create Trip
        </button>
      </main>
      <footer className="bg-neutral DEFAULT text-neutral-dark py-4">
        <div className="container mx-auto px-4 text-center">
          Made on <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">ZAPT</a>
        </div>
      </footer>
    </div>
  );
}