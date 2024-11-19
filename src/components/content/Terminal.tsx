import React from 'react';

interface TerminalProps {
  command: string;
  output?: string;
}

export default function Terminal({ command, output }: TerminalProps) {
  return (
    <div className="mt-8 max-w-2xl">
      <div className="bg-gray-900 rounded-t-lg p-2 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="bg-gray-900 p-4 rounded-b-lg font-mono">
        <div className="flex items-center text-white">
          <span className="text-gray-500">$</span>
          <span className="ml-2">{command}</span>
        </div>
        {output && (
          <div className="mt-2 text-gray-300 whitespace-pre-wrap">{output}</div>
        )}
      </div>
    </div>
  );
}