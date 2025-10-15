
import React, { useState } from 'react';
import { Post } from '../../types';

const initialPosts: Post[] = [
  { id: 1, author: "SeekerOfTruth", isAnonymous: false, content: "Day 30 today. Feeling a level of clarity I haven't felt in years. It's challenging but incredibly rewarding. Stay strong everyone.", timestamp: "2 hours ago", comments: [] },
  { id: 2, author: "Anonymous", isAnonymous: true, content: "Struggling with urges today, especially with stress from work. Any advice on how to redirect this energy productively?", timestamp: "5 hours ago", comments: [{id: 1, author: "Pathfinder", content: "Try a cold shower and some deep breathing exercises. It helps reset the nervous system."}] },
];

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${post.isAnonymous ? 'bg-gray-300' : 'bg-soft-blue'}`}>
               <span className="text-white font-bold">{post.isAnonymous ? 'A' : post.author.charAt(0)}</span>
            </div>
            <div>
                <p className="font-bold">{post.isAnonymous ? 'Anonymous' : post.author}</p>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
            </div>
        </div>
        <p className="text-gray-700">{post.content}</p>
        {post.comments.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-600 mb-2">Replies:</p>
                {post.comments.map(comment => (
                     <p key={comment.id} className="text-sm text-gray-600 pl-2 border-l-2 border-soft-blue-light">
                        <strong>{comment.author}:</strong> {comment.content}
                    </p>
                ))}
            </div>
        )}
    </div>
);

const CommunityPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [newPostContent, setNewPostContent] = useState('');
    const [postAnonymously, setPostAnonymously] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPostContent.trim() === '') return;

        const newPost: Post = {
            id: Date.now(),
            author: "CurrentUser", // This would be dynamic in a real app
            isAnonymous: postAnonymously,
            content: newPostContent,
            timestamp: "Just now",
            comments: []
        };

        setPosts([newPost, ...posts]);
        setNewPostContent('');
        setPostAnonymously(false);
    };

  return (
    <div className="p-4 space-y-8">
      <header className="text-center pt-8">
        <h1 className="text-4xl font-bold text-gray-800">Community Forum</h1>
        <p className="text-gray-500 mt-2">Share, support, and grow together.</p>
      </header>

      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold mb-3">Share Your Experience</h2>
        <form onSubmit={handleSubmit}>
            <textarea
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-saffron focus:border-saffron transition"
                rows={3}
                placeholder="Share your thoughts..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
            ></textarea>
            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                    <input 
                        type="checkbox" 
                        id="anonymous"
                        checked={postAnonymously}
                        onChange={(e) => setPostAnonymously(e.target.checked)}
                        className="h-4 w-4 text-saffron-dark focus:ring-saffron-dark border-gray-300 rounded"
                    />
                    <label htmlFor="anonymous" className="ml-2 text-sm text-gray-600">Post Anonymously</label>
                </div>
                <button type="submit" className="bg-saffron hover:bg-saffron-dark text-white font-bold py-2 px-4 rounded-lg transition">
                    Post
                </button>
            </div>
        </form>
      </div>
      
      <div className="space-y-4">
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default CommunityPage;
