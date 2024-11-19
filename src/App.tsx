import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Terminal from './components/content/Terminal';
import TimelinePreview from './components/content/TimelinePreview';

const modules = [
  {
    id: 1,
    title: 'Module 1: Basics',
    icon: 'folder' as const,
    lessons: [
      { id: 1, title: 'Introduction to Git', isActive: true },
      { id: 2, title: 'Setting Up Git' }
    ]
  },
  {
    id: 2,
    title: 'Module 2: Commands',
    icon: 'chevron' as const,
    lessons: [
      { id: 3, title: 'Basic Commands' },
      { id: 4, title: 'Advanced Usage' }
    ]
  }
];

export default function App() {
  const [progress] = useState(25);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar modules={modules} progress={progress} />
      
      <div className="flex-1 flex flex-col">
        <Header title="Module 1: Introduction to Git" />
        
        <main className="flex-1 overflow-y-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Introduction to Git</h1>
          <p className="text-gray-600 mb-8">
            Learn the fundamentals of version control and why Git is essential for modern development.
          </p>

          <TimelinePreview title="Git Repository Timeline" />
          <Terminal 
            command="git init" 
            output="Initialized empty Git repository in /project/.git/"
          />
        </main>
      </div>
    </div>
  );
}