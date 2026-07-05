import { Share2, Globe, MessageSquare, Clock, Star, MoreHorizontal } from 'lucide-react';

export function TopToolbar() {
  return (
    <div className="h-14 border-b border-border bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-accent rounded-md transition-colors">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">Last edited 2 hours ago</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-accent rounded-md transition-colors">
          <Star className="w-4 h-4 text-muted-foreground" />
        </button>

        <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-accent rounded-md transition-colors">
          <MessageSquare className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">Comments</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-1.5 bg-secondary hover:bg-secondary/80 rounded-md transition-colors">
          <Globe className="w-4 h-4 text-secondary-foreground" />
          <span className="text-sm text-secondary-foreground">Publish</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-1.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors">
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Share</span>
        </button>

        <button className="p-2 hover:bg-accent rounded-md transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
