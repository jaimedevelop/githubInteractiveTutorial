import React from 'react';
import { FolderOpen, ChevronDown } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface Module {
  id: number;
  title: string;
  icon: 'folder' | 'chevron';
  lessons: {
    id: number;
    title: string;
    isActive?: boolean;
  }[];
}

interface SidebarProps {
  modules: Module[];
  progress: number;
}

export default function Sidebar({ modules, progress }: SidebarProps) {
  return (
    <aside className="w-64 border-r bg-gray-50 h-screen flex flex-col">
      <div className="p-4 font-semibold text-lg border-b bg-white">
        Git Tutorial
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {modules.map((module) => (
          <div key={module.id} className="mb-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              {module.icon === 'folder' ? (
                <FolderOpen className="w-4 h-4 mr-2" />
              ) : (
                <ChevronDown className="w-4 h-4 mr-2" />
              )}
              {module.title}
            </div>
            <div className="ml-6 space-y-2">
              {module.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`text-sm p-2 rounded transition-colors cursor-pointer ${
                    lesson.isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {lesson.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProgressBar progress={progress} />
    </aside>
  );
}