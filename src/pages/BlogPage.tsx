import { Calendar, User, Clock, ArrowRight, TrendingUp, Lightbulb, Users, Zap } from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    title: 'The Future of Corporate Learning: AI and Personalization',
    excerpt: 'Discover how artificial intelligence is transforming corporate training, enabling personalized learning paths that adapt to individual needs and accelerate skill development.',
    author: 'Dr. Arjun Mehta',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Technology',
    image: '🤖',
  };

  const blogPosts = [
    {
      title: '5 Leadership Skills Every Manager Needs in 2025',
      excerpt: 'Explore the essential leadership competencies that separate great managers from good ones in today\'s dynamic business environment.',
      author: 'Sneha Reddy',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Leadership',
      image: '👥',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Measuring Training ROI: A Data-Driven Approach',
      excerpt: 'Learn how to quantify the impact of your training programs and demonstrate clear return on investment to stakeholders.',
      author: 'Vikram Singh',
      date: 'March 10, 2025',
      readTime: '7 min read',
      category: 'Analytics',
      image: '📊',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: 'The Art of Giving Constructive Feedback',
      excerpt: 'Master the techniques for delivering feedback that motivates, develops talent, and strengthens team relationships.',
      author: 'Anita Desai',
      date: 'March 8, 2025',
      readTime: '5 min read',
      category: 'Communication',
      image: '💬',
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: 'Remote Team Engagement: Best Practices',
      excerpt: 'Practical strategies for keeping distributed teams motivated, connected, and productive in hybrid work environments.',
      author: 'Priya Sharma',
      date: 'March 5, 2025',
      readTime: '6 min read',
      category: 'Remote Work',
      image: '🌐',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Building a Culture of Continuous Learning',
      excerpt: 'How to create an organizational culture where learning is valued, encouraged, and integrated into daily work.',
      author: 'Dr. Arjun Mehta',
      date: 'March 3, 2025',
      readTime: '7 min read',
      category: 'Culture',
      image: '🌱',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: 'Upskilling vs Reskilling: Which Does Your Team Need?',
      excerpt: 'Understand the difference between upskilling and reskilling, and when to apply each strategy for workforce development.',
      author: 'Vikram Singh',
      date: 'March 1, 2025',
      readTime: '5 min read',
      category: 'Strategy',
      image: '🎯',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'The Psychology of Adult Learning',
      excerpt: 'Insights into how adults learn differently and how to design training programs that align with adult learning principles.',
      author: 'Sneha Reddy',
      date: 'February 28, 2025',
      readTime: '8 min read',
      category: 'Learning Science',
      image: '🧠',
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: 'Gamification in Corporate Training: Does It Work?',
      excerpt: 'Examining the effectiveness of gamification in training programs and best practices for implementation.',
      author: 'Anita Desai',
      date: 'February 26, 2025',
      readTime: '6 min read',
      category: 'Innovation',
      image: '🎮',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Diversity & Inclusion Training That Actually Works',
      excerpt: 'Moving beyond checkbox training to create meaningful change in organizational diversity and inclusion.',
      author: 'Priya Sharma',
      date: 'February 24, 2025',
      readTime: '7 min read',
      category: 'DEI',
      image: '🤝',
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Leadership', count: 8 },
    { name: 'Technology', count: 6 },
    { name: 'Communication', count: 5 },
    { name: 'Culture', count: 5 },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert perspectives on learning, development, and organizational excellence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-12">
                <div className="text-9xl">{featuredPost.image}</div>
              </div>

              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4 self-start">
                  Featured Article
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center text-sm text-slate-600 mb-6 flex-wrap gap-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center self-start">
                  Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all flex items-center justify-between group">
                        <span className="text-slate-700 group-hover:text-blue-600 font-medium">
                          {category.name}
                        </span>
                        <span className="text-sm text-slate-500 bg-white px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Subscribe</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Get the latest insights delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all group"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-7xl">
                      {post.image}
                    </div>

                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-3">
                        {post.category}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center text-xs text-slate-500 mb-4 flex-wrap gap-3">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trending Topics</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Popular themes in learning and development right now
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['AI in Training', 'Hybrid Work', 'Employee Engagement', 'Change Management', 'Leadership Development', 'Upskilling', 'Learning Analytics', 'Soft Skills', 'Remote Teams', 'Performance Management'].map((tag, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white text-slate-700 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
