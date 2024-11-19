import React from 'react';
import { ChevronLeft, ChevronRight, Moon, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
  onThemeToggle?: () => void;
}

export default function Header({ title, onMenuClick, onThemeToggle }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-500" />
        </button>
        <span className="text-gray-600 font-medium">{title}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={onThemeToggle}
          className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <Moon className="w-5 h-5 text-gray-500" />
        </button>
        <nav className="flex items-center space-x-2">
          <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </nav>
      </div>
    </div>
  );
}