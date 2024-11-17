import React from 'react';
import { BookOpen, GitBranch, Github, GitPullRequest, Settings, Users, Zap } from 'lucide-react';

type NavItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  sections: string[];
};

const navItems: NavItem[] = [
  {
    id: 1,
    title: 'Introduction',
    icon: <BookOpen className="w-5 h-5" />,
    sections: ['What is Git?', 'What is GitHub?', 'Setting Up']
  },
  {
    id: 2,
    title: 'Basic Git Workflow',
    icon: <Github className="w-5 h-5" />,
    sections: ['Initializing Repository', 'Staging Files', 'Committing Changes']
  },
  {
    id: 3,
    title: 'GitHub Basics',
    icon: <Settings className="w-5 h-5" />,
    sections: ['Creating Repository', 'Remote Connection', 'Push and Pull']
  },
  {
    id: 4,
    title: 'Branching & Merging',
    icon: <GitBranch className="w-5 h-5" />,
    sections: ['Understanding Branches', 'Creating Branches', 'Merging']
  },
  {
    id: 5,
    title: 'Collaboration',
    icon: <Users className="w-5 h-5" />,
    sections: ['Forking', 'Pull Requests', 'Code Review']
  },
  {
    id: 6,
    title: 'Advanced Features',
    icon: <Zap className="w-5 h-5" />,
    sections: ['GitHub Actions', 'Projects', 'Security']
  }
];

interface SidebarProps {
  activeSection: number;
  setActiveSection: (id: number) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-900 text-gray-300 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <GitPullRequest className="w-6 h-6 text-blue-500" />
          <h1 className="text-xl font-bold text-white">Git Tutorial</h1>
        </div>
      </div>
      <nav className="p-4">
        {navItems.map((item) => (
          <div key={item.id} className="mb-4">
            <button
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
            {activeSection === item.id && (
              <div className="ml-6 mt-2 space-y-1">
                {item.sections.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-1 px-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {section}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}