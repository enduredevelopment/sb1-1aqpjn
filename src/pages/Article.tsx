import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { Clock, User, Calendar, Share2, Bookmark } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <div className="mb-8">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 font-medium">{article.summary}</p>
            <div className="text-gray-800 leading-relaxed space-y-6">
              {article.content}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 py-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Share2 size={20} />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Bookmark size={20} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            <RelatedArticles currentArticleId={article.id} category={article.category} />
          </div>
        </aside>
      </div>
    </div>
  );
}