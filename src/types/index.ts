export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  published: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface AdminState {
  isAuthenticated: boolean;
  articles: Article[];
}