import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Cpu, Camera, Video, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useFeaturedProjects, useRecentBlogPosts } from '../../hooks/useSanityData';
import { getImageUrl } from '../../lib/sanity';

const RecentActivity = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  // Fetch recent projects and blog posts from Sanity
  const { data: featuredProjects, loading: projectsLoading } = useFeaturedProjects();
  const { data: recentBlogPosts, loading: postsLoading } = useRecentBlogPosts();

  // Show minimal loading state within the section
  if (projectsLoading || postsLoading) {
    return (
      <section ref={elementRef} className="section-padding bg-dark-900/30 relative overflow-hidden">
        <div className="container-max relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </section>
    );
  }

  // Transform fetched data into activities format
  const activities = [];

  // Add featured projects (limit to 2)
  if (featuredProjects && featuredProjects.length > 0) {
    featuredProjects.slice(0, 2).forEach((project) => {
      const getCategoryIcon = (category) => {
        switch (category) {
          case 'electronics': return Cpu;
          case 'photography': return Camera;
          case 'video': return Video;
          default: return Zap;
        }
      };

      const getCategoryColor = (category) => {
        switch (category) {
          case 'electronics': return 'from-blue-500 to-cyan-500';
          case 'photography': return 'from-purple-500 to-pink-500';
          case 'video': return 'from-green-500 to-emerald-500';
          default: return 'from-orange-500 to-red-500';
        }
      };

      activities.push({
        id: project._id || project.id,
        type: project.category,
        title: project.title,
        description: project.description,
        date: 'Recent',
        icon: getCategoryIcon(project.category),
        color: getCategoryColor(project.category),
        image: project.image,
        category: project.category.charAt(0).toUpperCase() + project.category.slice(1)
      });
    });
  }

  // Add recent blog posts (limit to 2)
  if (recentBlogPosts && recentBlogPosts.length > 0) {
    recentBlogPosts.slice(0, 2).forEach((post) => {
      activities.push({
        id: post._id || post.id,
        type: 'blog',
        title: post.title,
        description: post.excerpt,
        date: new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        icon: Zap,
        color: 'from-purple-500 to-pink-500',
        image: post.featuredImage,
        category: 'Blog Post'
      });
    });
  }

  return (
    <section ref={elementRef} className="section-padding bg-dark-900/30 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20">
          <Cpu className="w-full h-full text-blue-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 w-16 h-16">
          <Camera className="w-full h-full text-purple-400 animate-pulse" style={{animationDelay: '1s'}} />
        </div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Recent <span className="gradient-text">Adventures</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto">
            What I've been building, capturing, and creating lately
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glassmorphism-strong p-6 sm:p-8 h-full rounded-3xl hover:shadow-glow transition-all duration-500 overflow-hidden relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${activity.color} bg-opacity-20`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {activity.date}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={getImageUrl(activity.image, 600)}
                      alt={activity.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${activity.color} bg-opacity-20 text-white mb-3 inline-block`}>
                      {activity.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {activity.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group/btn cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium mr-2">Learn More</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glassmorphism-strong rounded-2xl p-6 inline-block">
            <p className="text-white/80 mb-4">
              Want to see more of my projects and adventures?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
              >
                View All Projects
              </Link>
              <Link
                to="/gallery"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors font-medium"
              >
                Photography Gallery
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentActivity;
