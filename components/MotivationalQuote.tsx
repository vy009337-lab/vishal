
import React, { useState, useEffect } from 'react';
import { generateMotivationalQuote } from '../services/geminiService';

const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const newQuote = await generateMotivationalQuote();
      setQuote(newQuote);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setQuote("Inner peace begins the moment you choose not to allow another event to control your emotions.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-soft-blue-light border-l-4 border-soft-blue-dark text-soft-blue-dark p-5 rounded-r-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Daily Inspiration</h2>
      {isLoading ? (
        <div className="flex items-center justify-center h-24">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saffron-dark"></div>
        </div>
      ) : (
        <blockquote className="italic text-gray-700">
          <p>"{quote}"</p>
        </blockquote>
      )}
      <button 
        onClick={fetchQuote} 
        disabled={isLoading}
        className="mt-4 text-sm font-semibold text-saffron-dark hover:text-saffron disabled:opacity-50"
      >
        {isLoading ? 'Generating...' : 'New Quote'}
      </button>
    </div>
  );
};

export default MotivationalQuote;
