import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="p-4 border-t bg-white">
      <div className="text-sm text-gray-600 mb-2">Progress</div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm text-gray-600 mt-1 text-right">{progress}%</div>
    </div>
  );
}