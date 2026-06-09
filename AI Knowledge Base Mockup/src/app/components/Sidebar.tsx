import { ChevronRight, ChevronDown, File, Folder, Search, Plus, Settings, User } from 'lucide-react';
import { useState } from 'react';

interface PageItem {
  id: string;
  name: string;
  type: 'page' | 'folder';
  children?: PageItem[];
  expanded?: boolean;
}

export function Sidebar() {
  const [pages, setPages] = useState<PageItem[]>([
    {
      id: '1',
      name: 'Getting Started',
      type: 'folder',
      expanded: true,
      children: [
        { id: '1-1', name: 'Introduction', type: 'page' },
        { id: '1-2', name: 'Quick Start Guide', type: 'page' },
      ]
    },
    {
      id: '2',
      name: 'Projects',
      type: 'folder',
      expanded: true,
      children: [
        { id: '2-1', name: 'Q2 Roadmap', type: 'page' },
        { id: '2-2', name: 'Team Meeting Notes', type: 'page' },
        { id: '2-3', name: 'Product Specs', type: 'page' },
      ]
    },
    {
      id: '3',
      name: 'Personal Notes',
      type: 'page'
    },
    {
      id: '4',
      name: 'Resources',
      type: 'folder',
      expanded: false,
      children: [
        { id: '4-1', name: 'Design Assets', type: 'page' },
        { id: '4-2', name: 'API Documentation', type: 'page' },
      ]
    }
  ]);

  const [selectedPage, setSelectedPage] = useState('1-1');

  const toggleFolder = (id: string) => {
    const updateExpanded = (items: PageItem[]): PageItem[] => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, expanded: !item.expanded };
        }
        if (item.children) {
          return { ...item, children: updateExpanded(item.children) };
        }
        return item;
      });
    };
    setPages(updateExpanded(pages));
  };

  const renderPageItem = (item: PageItem, depth = 0) => {
    const isFolder = item.type === 'folder';
    const isExpanded = item.expanded;
    const isSelected = item.id === selectedPage;

    return (
      <div key={item.id}>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer hover:bg-sidebar-accent transition-colors ${
            isSelected && !isFolder ? 'bg-sidebar-accent' : ''
          }`}
          style={{ paddingLeft: `${depth * 12 + 12}px` }}
          onClick={() => {
            if (isFolder) {
              toggleFolder(item.id);
            } else {
              setSelectedPage(item.id);
            }
          }}
        >
          {isFolder ? (
            <>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-sidebar-foreground/60" />
              ) : (
                <ChevronRight className="w-4 h-4 text-sidebar-foreground/60" />
              )}
              <Folder className="w-4 h-4 text-sidebar-foreground/60" />
            </>
          ) : (
            <>
              <div className="w-4" />
              <File className="w-4 h-4 text-sidebar-foreground/60" />
            </>
          )}
          <span className="text-sm text-sidebar-foreground/90">{item.name}</span>
        </div>
        {isFolder && isExpanded && item.children && (
          <div>
            {item.children.map(child => renderPageItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-md bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-semibold">KB</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">My Workspace</span>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sidebar-foreground/40" />
          <input
            type="text"
            placeholder="Search pages..."
            className="w-full pl-9 pr-3 py-2 bg-sidebar-accent rounded-md text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 border-0 focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="mb-4">
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wide">Pages</span>
            <button className="p-1 hover:bg-sidebar-accent rounded transition-colors">
              <Plus className="w-4 h-4 text-sidebar-foreground/60" />
            </button>
          </div>
          {pages.map(page => renderPageItem(page))}
        </div>
      </div>

      <div className="p-2 border-t border-sidebar-border">
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors">
          <Settings className="w-4 h-4 text-sidebar-foreground/60" />
          <span className="text-sm text-sidebar-foreground/90">Settings</span>
        </button>
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors">
          <User className="w-4 h-4 text-sidebar-foreground/60" />
          <span className="text-sm text-sidebar-foreground/90">Profile</span>
        </button>
      </div>
    </div>
  );
}
