import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { blogs } from './Blog';
import { useEffect } from 'react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">We couldn't find the article you were looking for. It might have been removed or the link is incorrect.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="pt-20 pb-24 bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative pt-16 pb-32 flex items-center justify-center min-h-[50vh] bg-gray-900 border-b-8 border-orange-500 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <Reveal direction="down">
            <Link to="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>
            
            <div className="mb-6">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm font-medium">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                {blog.author}
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                {blog.date}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <Reveal direction="up" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 md:p-16">
          
          {/* Introductory Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12 pb-10 border-b border-gray-200">
            {blog.excerpt}
          </p>

          {/* Social Share Bar (Floating/Sticky could be added later, static for now) */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
            <div className="text-sm font-semibold uppercase tracking-wider text-gray-400 flex items-center">
              <Share2 className="w-4 h-4 mr-2" /> Share this article
            </div>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Blog Typography Markdown-Style Content */}
          <div 
            className="prose prose-lg prose-blue max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-li:text-gray-600 prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Footer Call To Action */}
          <div className="mt-20 pt-10 border-t border-gray-200 text-center bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to learn more?</h3>
            <p className="text-gray-600 mb-6">Our expert counsellors are ready to help you navigate your journey to a UK university.</p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Book a Free Consultation
            </Link>
          </div>
        </Reveal>
      </div>

    </article>
  );
};

export default BlogPost;
