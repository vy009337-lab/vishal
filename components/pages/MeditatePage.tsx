
import React from 'react';
import { Meditation } from '../../types';
import FocusTimer from '../FocusTimer';

const meditations: Meditation[] = [
    {id: 1, title: "Morning Focus Meditation", duration: "10 min", description: "Start your day with clarity and intention."},
    {id: 2, title: "Overcoming Urges", duration: "15 min", description: "A guided session to transmute energy and find peace."},
    {id: 3, title: "Deep Relaxation", duration: "20 min", description: "Release tension and calm your mind before sleep."},
];

const MeditationCard: React.FC<{ meditation: Meditation }> = ({ meditation }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
            <h3 className="font-bold">{meditation.title}</h3>
            <p className="text-sm text-gray-500">{meditation.description}</p>
        </div>
        <div className="text-right">
             <p className="text-sm font-semibold text-saffron-dark">{meditation.duration}</p>
        </div>
    </div>
)

const MeditatePage: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <header className="text-center pt-8">
        <h1 className="text-4xl font-bold text-gray-800">Mindfulness Tools</h1>
        <p className="text-gray-500 mt-2">Cultivate focus and inner peace.</p>
      </header>
      
      <FocusTimer />

      <section>
        <h2 className="text-2xl font-bold mb-4 text-saffron-dark">Guided Meditations</h2>
        <div className="space-y-3">
            {meditations.map(med => <MeditationCard key={med.id} meditation={med} />)}
        </div>
      </section>
    </div>
  );
};

export default MeditatePage;
