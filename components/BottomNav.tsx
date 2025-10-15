
import React from 'react';
import Icon from './Icon';
import { Page } from '../types';

interface BottomNavProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavItem: React.FC<{
  page: Page;
  label: string;
  iconName: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ page, label, iconName, isActive, onClick }) => {
  const activeClasses = 'text-saffron-dark';
  const inactiveClasses = 'text-gray-500 hover:text-saffron-dark';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Icon name={iconName} className="w-6 h-6" />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
  const navItems: { page: Page; label: string; iconName: string }[] = [
    { page: 'home', label: 'Home', iconName: 'home' },
    { page: 'knowledge', label: 'Knowledge', iconName: 'knowledge' },
    { page: 'community', label: 'Community', iconName: 'community' },
    { page: 'meditate', label: 'Meditate', iconName: 'meditate' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <NavItem
            key={item.page}
            page={item.page}
            label={item.label}
            iconName={item.iconName}
            isActive={activePage === item.page}
            onClick={() => setActivePage(item.page)}
          />
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
