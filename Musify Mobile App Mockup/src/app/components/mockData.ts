export const mockData = {
  user: {
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgwODkxMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  nowPlaying: {
    title: 'Midnight City',
    artist: 'M83',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY29uY2VydHxlbnwxfHx8fDE3ODA4OTUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    listeners: '4.2M'
  },
  trending: [
    { id: 1, title: 'Lofi Chill', artist: 'Chillhop Music', image: 'https://images.unsplash.com/photo-1712507123246-476b08ae363f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2ZpJTIwYWVzdGhldGljfGVufDF8fHx8MTc4MDg5NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080', listeners: '1.2M' },
    { id: 2, title: 'Late Night Jazz', artist: 'Miles Quintet', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwYmFuZCUyMGxpdmV8ZW58MXx8fHwxNzgwODk1MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080', listeners: '840K' },
    { id: 3, title: 'Mainstage EDM', artist: 'DJ Pulse', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZGFuY2UlMjBtdXNpY3xlbnwxfHx8fDE3ODA4OTUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080', listeners: '2.5M' },
    { id: 4, title: 'Neon Pop', artist: 'Synthwave', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY29uY2VydHxlbnwxfHx8fDE3ODA4OTUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080', listeners: '3.1M' },
  ],
  exploreGenres: [
    { id: 1, name: 'Indie Anthems', image: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMHJvY2slMjBiYW5kfGVufDF8fHx8MTc4MDg5NTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080', color: 'bg-rose-100/50' },
    { id: 2, name: 'Classical Focus', image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwaWFubyUyMHNoZWV0JTIwbXVzaWN8ZW58MXx8fHwxNzgwODk1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080', color: 'bg-blue-100/50' },
    { id: 3, name: 'Acoustic Vibes', image: 'https://images.unsplash.com/photo-1610557607773-51db1458e1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3ODA4OTUwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', color: 'bg-amber-100/50' },
    { id: 4, name: 'Vinyl Grooves', image: 'https://images.unsplash.com/photo-1616714109948-c74fe5029a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHBsYXllcnxlbnwxfHx8fDE3ODA4MTcyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080', color: 'bg-purple-100/50' },
    { id: 5, name: 'Abstract Sounds', image: 'https://images.unsplash.com/photo-1699465301322-362016624dd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWxpc3QlMjBhcnR8ZW58MXx8fHwxNzgwODk1MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080', color: 'bg-emerald-100/50' },
  ],
  library: [
    { id: 1, title: 'My Top Songs 2026', type: 'Playlist', songs: 142 },
    { id: 2, title: 'Focus Flow', type: 'Playlist', songs: 85 },
    { id: 3, title: 'Liked Songs', type: 'Collection', songs: 1205 },
    { id: 4, title: 'Weekend Vibes', type: 'Playlist', songs: 43 },
  ]
};