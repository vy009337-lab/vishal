
import React from 'react';
import StreakCounter from '../StreakCounter';
import MotivationalQuote from '../MotivationalQuote';

const HomePage: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
       <header className="text-center pt-8">
        <h1 className="text-4xl font-bold text-saffron-dark tracking-tight">Path to Purity</h1>
        <p className="text-gray-500 mt-2">Your daily guide to self-mastery.</p>
      </header>
      
      <StreakCounter />
      <MotivationalQuote />

       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Daily Affirmation</h2>
        <p className="text-gray-600 italic">"I am disciplined, focused, and in control of my energy. Every day, I grow stronger in mind, body, and spirit."</p>
      </div>
    </div>
  );
};

export default HomePage;
