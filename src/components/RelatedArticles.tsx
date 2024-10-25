import { articles } from '../data/articles';
import { Link } from 'react-router-dom';

interface RelatedArticlesProps {
  currentArticleId: string;
  category: string;
}

export default function RelatedArticles({ currentArticleId, category }: RelatedArticlesProps) {
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId && article.category === category)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Related Articles</h3>
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="block group"
          >
            <div className="flex space-x-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{article.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}