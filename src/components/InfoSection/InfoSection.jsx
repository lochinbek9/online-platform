import React from 'react';
import { Sparkles, Brain, Zap, TrendingUp } from 'lucide-react';

export default function InfoSection() {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <p className="text-purple-400 font-medium">Who is Jasper?</p>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Artificial intelligence trained to write
            </h2>

            <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              original, creative content
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed pt-4">
              We consulted with the world's best SEO and Direct Response Marketing
              experts to teach Jasper how to write blog articles, social media posts,
              website copy, and more...
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition border border-gray-700">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition group">
              <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition">
                <Brain className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">AI-Powered</h4>
              <p className="text-gray-400">
                Advanced machine learning algorithms create human-like content
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition group">
              <div className="bg-purple-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition">
                <Zap className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Lightning Fast</h4>
              <p className="text-gray-400">
                Generate high-quality content in seconds, not hours
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition group">
              <div className="bg-pink-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition">
                <TrendingUp className="w-7 h-7 text-pink-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">SEO Optimized</h4>
              <p className="text-gray-400">
                Content designed to rank higher in search results
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition group">
              <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition">
                <Sparkles className="w-7 h-7 text-green-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Creative & Original</h4>
              <p className="text-gray-400">
                Unique content that stands out from the crowd
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700">
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
              1M+
            </p>
            <p className="text-gray-400">Content Generated</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
              50K+
            </p>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text mb-2">
              4.9/5
            </p>
            <p className="text-gray-400">User Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text mb-2">
              25+
            </p>
            <p className="text-gray-400">Languages</p>
          </div>
        </div>
      </div>
    </div>
  );
}