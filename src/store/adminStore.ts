import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AdminState } from '../types';
import { articles as initialArticles } from '../data/articles';

const ADMIN_PASSWORD = "F1N_!*AD3M!N";

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      articles: initialArticles,
      login: (password: string) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
      addArticle: (article: Article) => 
        set((state) => ({ 
          articles: [...state.articles, { ...article, id: Date.now().toString() }] 
        })),
      updateArticle: (article: Article) =>
        set((state) => ({
          articles: state.articles.map((a) => (a.id === article.id ? article : a))
        })),
      deleteArticle: (id: string) =>
        set((state) => ({
          articles: state.articles.filter((a) => a.id !== id)
        })),
    }),
    {
      name: 'admin-storage',
    }
  )
);