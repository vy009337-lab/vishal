
import React, { useState, useEffect, useCallback } from 'react';

const StreakCounter: React.FC = () => {
  const [streak, setStreak] = useState<number>(0);
  const [lastCheckIn, setLastCheckIn] = useState<string | null>(null);

  const getTodayString = () => {
    return new Date().toISOString().split('T')[0];
  };

  useEffect(() => {
    const savedStreak = localStorage.getItem('brahmacharya_streak');
    const savedLastCheckIn = localStorage.getItem('brahmacharya_lastCheckIn');
    
    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10));
    }
    
    if (savedLastCheckIn) {
      setLastCheckIn(savedLastCheckIn);
      // Reset streak if last check-in was not yesterday or today
      const today = new Date();
      const lastDate = new Date(savedLastCheckIn);
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      if (lastDate.toDateString() !== today.toDateString() && lastDate.toDateString() !== yesterday.toDateString()) {
          setStreak(0);
          localStorage.setItem('brahmacharya_streak', '0');
      }
    }
  }, []);
  
  const handleCheckIn = useCallback(() => {
    const todayStr = getTodayString();
    if (lastCheckIn !== todayStr) {
      const newStreak = (lastCheckIn === new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0]) ? streak + 1 : 1;
      setStreak(newStreak);
      setLastCheckIn(todayStr);
      localStorage.setItem('brahmacharya_streak', newStreak.toString());
      localStorage.setItem('brahmacharya_lastCheckIn', todayStr);
    }
  }, [lastCheckIn, streak]);
  
  const canCheckIn = lastCheckIn !== getTodayString();

  return (
    <div className="bg-gradient-to-br from-saffron to-saffron-dark text-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold uppercase tracking-wider opacity-90">Current Streak</h2>
      <div className="text-7xl font-bold my-2">{streak}</div>
      <p className="font-light opacity-90">{streak === 1 ? 'Day' : 'Days'}</p>
      {canCheckIn ? (
        <button 
          onClick={handleCheckIn} 
          className="mt-4 bg-white text-saffron-dark font-bold py-2 px-6 rounded-full shadow-md hover:bg-saffron-light transition-all duration-300"
        >
          Check-in for Today
        </button>
      ) : (
        <p className="mt-4 bg-white/30 text-white font-semibold py-2 px-6 rounded-full">
          You've checked in today!
        </p>
      )}
    </div>
  );
};

export default StreakCounter;
