import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured }: ArticleCardProps) {
  return (
    <Link to={`/article/${article.id}`}>
      <div className={`bg-white rounded-lg shadow-md overflow-hidden ${featured ? 'lg:flex' : ''}`}>
        <div className={`relative ${featured ? 'lg:w-2/3' : 'w-full'}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-sm">
            {article.category}
          </span>
        </div>
        <div className="p-4">
          <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'} mb-2`}>
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4">{article.summary}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}