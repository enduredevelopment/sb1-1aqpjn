import { useParams } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Category() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryArticles = articles.filter(article => article.category.toLowerCase() === slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">{category.name}</h1>
        <p className="text-gray-600 mt-2">Latest {category.name.toLowerCase()} news and updates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}