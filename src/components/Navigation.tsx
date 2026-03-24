import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, MessageSquare, Users, Settings, Layout, BarChart2, Video, Search, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: Home, label: 'Today', path: '/' },
  { icon: BookOpen, label: 'Guide', path: '/guide' },
  { icon: MessageSquare, label: 'Counselor', path: '/chat' },
  { icon: Users, label: 'Lounge', path: '/lounge' },
  { icon: BarChart2, label: 'Progress', path: '/progress' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full glass border-t border-outline-variant/10 px-4 pb-8 pt-4 z-50 flex justify-around items-center rounded-t-[2.5rem] editorial-shadow md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300",
              isActive ? "bg-primary text-white shadow-lg scale-105" : "text-on-surface-variant hover:text-primary"
            )
          }
        >
          <item.icon size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex gap-8 items-center mr-6">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "text-[11px] uppercase tracking-widest font-bold transition-colors",
              isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
