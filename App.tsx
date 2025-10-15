
import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomePage from './components/pages/HomePage';
import KnowledgePage from './components/pages/KnowledgePage';
import CommunityPage from './components/pages/CommunityPage';
import MeditatePage from './components/pages/MeditatePage';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'knowledge':
        return <KnowledgePage />;
      case 'community':
        return <CommunityPage />;
      case 'meditate':
        return <MeditatePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-gray-800 flex flex-col antialiased">
      <main className="flex-grow pb-20">
        <div className="max-w-md mx-auto h-full">
            {renderPage()}
        </div>
      </main>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default App;
