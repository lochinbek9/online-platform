import React, { useState, useRef, useEffect } from 'react';

import Footer from '../../components/Footer/Footer';
import VideoPlayer from '../../components/VideoPlay/VideoPlayer';
import Navbar from '../../components/Navbar/Navbar';
import Partners from '../../components/Partners/Partners'

// Video Player Component


// Main HomePage Component
export default function HomePage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen flex flex-col  bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex flex-col items-center justify-center text-center px-4">
        <p className="text-lg mb-4 text-gray-300 tracking-wide">Meet Lodex</p>

        <h1 className="text-5xl font-bold text-white mb-4">The Future of Writing</h1>

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-8 pb-2">
            Blog A
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Artificial intelligence makes it fast & easy to create content for your blog,
                    social media, website, and more! Rated 5/5 stars in 3,000+ reviews.
                </p>
                <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl">
                        Boshlash
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

                {/* Video Player */}
                <VideoPlayer />
                <Partners/>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}