import React from 'react';
import { ChevronLeft, ChevronRight, Moon, Menu, FolderOpen, ChevronDown } from 'lucide-react';

const GitTutorial = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r bg-gray-50">
        <div className="p-4 font-semibold text-lg border-b">Git Tutorial</div>
        
        {/* Modules */}
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <FolderOpen className="w-4 h-4 mr-2" />
              Module 1: Basics
            </div>
            <div className="ml-6 space-y-2">
              <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">Introduction to Git</div>
              <div className="text-sm text-gray-600 p-2">Setting Up Git</div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <ChevronDown className="w-4 h-4 mr-2" />
              Module 2: Commands
            </div>
            <div className="ml-6 space-y-2">
              <div className="text-sm text-gray-600 p-2">Basic Commands</div>
              <div className="text-sm text-gray-600 p-2">Advanced Usage</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 w-64 p-4 border-t bg-white">
          <div className="text-sm text-gray-600 mb-2">Progress</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
          </div>
          <div className="text-sm text-gray-600 mt-1 text-right">25%</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-4">
            <Menu className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Module 1: Introduction to Git</span>
          </div>
          <div className="flex items-center space-x-4">
            <Moon className="w-5 h-5 text-gray-500" />
            <ChevronLeft className="w-5 h-5 text-gray-500" />
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Introduction to Git</h1>
          <p className="text-gray-600 mb-8">
            Learn the fundamentals of version control and why Git is essential for modern development.
          </p>

          {/* Timeline Preview Box */}
          <div className="border rounded-lg p-6 bg-gray-50 w-full max-w-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="text-lg font-semibold mb-2">Git Repository Timeline</div>
            <div className="h-32 bg-white rounded border"></div>
          </div>

          {/* Terminal Preview */}
          <div className="mt-8 max-w-2xl">
            <div className="bg-gray-900 rounded-t-lg p-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-gray-900 p-4 rounded-b-lg">
              <div className="flex items-center text-white font-mono">
                <span className="text-gray-500">$</span>
                <span className="ml-2">git init</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitTutorial;
