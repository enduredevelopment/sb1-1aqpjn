import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Story</h2>
        <ArticleCard article={featuredArticle} featured />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}