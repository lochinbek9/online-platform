import React, { useState, useRef, useEffect } from 'react';
import { Home, Info, Mail, Menu, Zap, Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';

// Video Player Component
function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume || 0.5;
      setVolume(volume || 0.5);
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const skip = (seconds) => {
    videoRef.current.currentTime += seconds;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.parentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div 
        className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(isPlaying ? false : true)}
      >
        <video
          ref={videoRef}
          className="w-full aspect-video"
          onClick={togglePlay}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        >
          Brauzeringiz video playbackni qo'llab-quvvatlamaydi.
        </video>

        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / duration) * 100}%, #4b5563 ${(currentTime / duration) * 100}%, #4b5563 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-300 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-blue-400 transition"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </button>

              <button
                onClick={() => skip(-10)}
                className="text-white hover:text-blue-400 transition"
              >
                <SkipBack className="w-6 h-6" />
              </button>
              <button
                onClick={() => skip(10)}
                className="text-white hover:text-blue-400 transition"
              >
                <SkipForward className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-blue-400 transition"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-blue-400 transition"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>

        {!isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
            onClick={togglePlay}
          >
            <div className="bg-blue-500/80 rounded-full p-6 hover:bg-blue-500 transition">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Big Buck Bunny</h2>
        <p className="text-gray-400">
          Demo video - Blender Foundation tomonidan yaratilgan qisqa animatsion film
        </p>
      </div>
    </div>
  );
}

// Main HomePage Component
export default function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI999
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition">
                <Home className="w-4 h-4 mr-2" />
                Bosh sahifa
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition">
                <Info className="w-4 h-4 mr-2" />
                Biz haqimizda
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition">
                <Mail className="w-4 h-4 mr-2" />
                Aloqa
              </a>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 text-gray-300 hover:text-white transition font-medium">
                Login
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-white transition"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-700 pt-4">
              <div className="space-y-3">
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition py-2">
                  <Home className="w-4 h-4 mr-2" />
                  Bosh sahifa
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition py-2">
                  <Info className="w-4 h-4 mr-2" />
                  Biz haqimizda
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-white transition py-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Aloqa
                </a>
                <div className="pt-4 space-y-3 border-t border-gray-700">
                  <button className="w-full px-6 py-2 text-gray-300 hover:text-white transition font-medium border border-gray-600 rounded-lg hover:border-gray-500">
                    Login
                  </button>
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition shadow-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Xush kelibsiz AI999 ga!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Bu zamonaviy va chiroyli home page dizayni. Bu yerda siz o'zingizning 
                biznesingiz yoki shaxsiy loyihangiz haqida ma'lumot joylashtirishingiz mumkin.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Sahifa to'liq responsive bo'lib, barcha qurilmalarda mukammal ko'rinadi. 
                Navbar, asosiy kontent va footer qismlari professional tarzda dizayn qilingan.
              </p>
              <div className="flex justify-center mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl">
                  Boshlash
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <VideoPlayer />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI999</h3>
              <p className="text-gray-400">
                Eng yaxshi xizmatlarni taqdim etamiz
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Havolalar</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Bosh sahifa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Xizmatlar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Aloqa</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Bog'lanish</h3>
              <p className="text-gray-400">Email: info@ai999.uz</p>
              <p className="text-gray-400">Tel: +998 90 123 45 67</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 AI999. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}