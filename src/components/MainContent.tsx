import React from 'react';
import { Terminal } from 'lucide-react';

interface CodeBlockProps {
  command: string;
  output?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ command, output }) => (
  <div className="bg-gray-900 rounded-lg p-4 my-4">
    <div className="flex items-center space-x-2 text-green-400">
      <Terminal className="w-4 h-4" />
      <code>$ {command}</code>
    </div>
    {output && (
      <pre className="mt-2 text-gray-400 text-sm">
        {output}
      </pre>
    )}
  </div>
);

interface MainContentProps {
  activeSection: number;
}

export default function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 1:
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">Introduction to Git and GitHub</h2>
            <div className="space-y-6">
              <section>
                <h3 className="text-2xl font-semibold mb-4">What is Git?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Git is a distributed version control system that tracks changes in source code during software development.
                  It's designed for coordinating work among programmers, but it can be used to track changes in any set of files.
                </p>
                <div className="bg-gray-800 p-6 rounded-lg mt-4">
                  <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Distributed development</li>
                    <li>Strong support for non-linear development</li>
                    <li>Efficient handling of large projects</li>
                    <li>Cryptographic authentication of history</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Getting Started</h3>
                <p className="text-gray-300 mb-4">Let's start with installing Git on your system:</p>
                <CodeBlock 
                  command="git --version" 
                  output="git version 2.34.1"
                />
                <p className="text-gray-300 mt-4">
                  Configure your Git identity:
                </p>
                <CodeBlock 
                  command="git config --global user.name 'Your Name'"
                />
                <CodeBlock 
                  command="git config --global user.email 'your.email@example.com'"
                />
              </section>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center text-gray-400">
            <p>Select a section from the sidebar to begin learning</p>
          </div>
        );
    }
  };

  return (
    <div className="ml-64 p-8 bg-gray-950 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}