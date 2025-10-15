
import React from 'react';
import { Article, Video } from '../../types';

const articles: Article[] = [
  { id: 1, title: "The Spiritual Benefits of Brahmacharya", summary: "Explore how self-control can elevate your spiritual journey and consciousness.", category: "Spirituality", imageUrl: "https://picsum.photos/seed/spirit/400/200" },
  { id: 2, title: "Lifestyle Guide for Practitioners", summary: "Practical tips on diet, exercise, and daily routines to support your practice.", category: "Lifestyle", imageUrl: "https://picsum.photos/seed/life/400/200" },
  { id: 3, title: "Overcoming Challenges and Temptations", summary: "Strategies to stay strong and focused when faced with modern-day distractions.", category: "Challenges", imageUrl: "https://picsum.photos/seed/challenge/400/200" },
];

const videos: Video[] = [
    { id: 1, title: "Understanding Energy Transmutation", description: "Learn the ancient techniques of transforming physical energy into spiritual energy.", thumbnailUrl: "https://picsum.photos/seed/energy/400/200", videoId: "dQw4w9WgXcQ"},
    { id: 2, title: "Guided Meditation for Inner Strength", description: "A 15-minute guided session to cultivate mental and emotional resilience.", thumbnailUrl: "https://picsum.photos/seed/meditate/400/200", videoId: "dQw4w9WgXcQ"},
]

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
        <img src={article.imageUrl} alt={article.title} className="w-full h-32 object-cover" />
        <div className="p-4">
            <p className="text-xs font-semibold text-saffron-dark uppercase">{article.category}</p>
            <h3 className="font-bold mt-1">{article.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{article.summary}</p>
        </div>
    </div>
);

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
     <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex items-center gap-4 p-4 transform hover:-translate-y-1 transition-transform duration-300">
        <img src={video.thumbnailUrl} alt={video.title} className="w-24 h-24 object-cover rounded-lg" />
        <div className="flex-1">
            <h3 className="font-bold">{video.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{video.description}</p>
        </div>
    </div>
);

const KnowledgePage: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <header className="text-center pt-8">
        <h1 className="text-4xl font-bold text-gray-800">Knowledge Hub</h1>
        <p className="text-gray-500 mt-2">Wisdom for your journey.</p>
      </header>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-saffron-dark">Articles</h2>
        <div className="space-y-4">
          {articles.map(article => <ArticleCard key={article.id} article={article} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-saffron-dark">Videos</h2>
        <div className="space-y-4">
          {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </div>
      </section>
    </div>
  );
};

export default KnowledgePage;
