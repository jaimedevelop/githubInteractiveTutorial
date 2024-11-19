import React from 'react';

interface TimelinePreviewProps {
  title: string;
  onClick?: () => void;
}

export default function TimelinePreview({ title, onClick }: TimelinePreviewProps) {
  return (
    <div 
      className="border rounded-lg p-6 bg-gray-50 w-full max-w-2xl cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="h-32 bg-white rounded border"></div>
    </div>
  );
}