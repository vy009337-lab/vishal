
export type Page = 'home' | 'knowledge' | 'community' | 'meditate';

export interface Post {
  id: number;
  author: string;
  isAnonymous: boolean;
  content: string;
  timestamp: string;
  comments: Comment[];
}

export interface Comment {
    id: number;
    author: string;
    content: string;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoId: string;
}

export interface Meditation {
  id: number;
  title: string;
  duration: string;
  description: string;
}
