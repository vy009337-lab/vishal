
import React, { useState, useEffect, useRef } from 'react';

const FocusTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const totalSeconds = minutes * 60 + seconds;
  const initialTotalSeconds = 25 * 60;
  const progress = totalSeconds / initialTotalSeconds;

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };
  
  const setTime = (mins: number) => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
    setIsActive(false);
    setMinutes(mins);
    setSeconds(0);
  }

  useEffect(() => {
    if (isActive) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          }
          setMinutes((prevMinutes) => {
            if (prevMinutes > 0) {
              setSeconds(59);
              return prevMinutes - 1;
            }
            // Timer finished
            resetTimer();
            alert("Focus session complete!");
            return 0;
          });
          return 0;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
          clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
          clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <div className="bg-soft-blue-light p-6 rounded-2xl shadow-sm text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Focus Timer</h2>
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <circle className="text-gray-200" strokeWidth="5" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
            <circle 
                className="text-saffron-dark" 
                strokeWidth="5" 
                strokeDasharray={2 * Math.PI * 45} 
                strokeDashoffset={(2 * Math.PI * 45) * (1 - progress)}
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="45" 
                cx="50" 
                cy="50"
                transform="rotate(-90 50 50)"
            />
        </svg>
        <p className="text-5xl font-mono font-bold text-gray-800">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
      <div className="flex justify-center gap-4 my-6">
        <button onClick={toggleTimer} className="bg-saffron hover:bg-saffron-dark text-white font-bold py-2 px-6 rounded-full w-28 transition">
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full w-28 transition">
          Reset
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <button onClick={() => setTime(15)} className="text-sm bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100">15 min</button>
        <button onClick={() => setTime(25)} className="text-sm bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100">25 min</button>
        <button onClick={() => setTime(45)} className="text-sm bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100">45 min</button>
      </div>
    </div>
  );
};

export default FocusTimer;
