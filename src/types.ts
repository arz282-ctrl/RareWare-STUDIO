export interface Task {
  id: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
}

export interface Milestone {
  day: number;
  title: string;
  status: 'completed' | 'active' | 'locked';
  icon?: string;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  content: string;
  timestamp: string;
  sparks: number;
  replies: number;
  tags?: string[];
  type?: 'text' | 'reflection';
}
