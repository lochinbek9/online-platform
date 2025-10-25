import React from 'react';
import { Home, Info, Mail, Menu } from 'lucide-react';
import VideoPlayer from '../../components/VideoPlay/VideoPlayer';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">MyWebsite</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                <Home className="w-4 h-4 mr-1" />
                Bosh sahifa
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                <Info className="w-4 h-4 mr-1" />
                Biz haqimizda
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition">
                <Mail className="w-4 h-4 mr-1" />
                Aloqa
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
                Bosh sahifa
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
                Biz haqimizda
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
                Aloqa
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Xush kelibsiz!
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu zamonaviy va chiroyli home page dizayni. Bu yerda siz o'zingizning 
                biznesingiz yoki shaxsiy loyihangiz haqida ma'lumot joylashtirishingiz mumkin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sahifa to'liq responsive bo'lib, barcha qurilmalarda mukammal ko'rinadi. 
                Navbar, asosiy kontent va footer qismlari professional tarzda dizayn qilingan.
              </p>
              <div className="flex justify-center mt-8">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md">
                  Boshlash
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <VideoPlayer/>
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MyWebsite</h3>
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
              <p className="text-gray-400">Email: info@mywebsite.uz</p>
              <p className="text-gray-400">Tel: +998 90 123 45 67</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 MyWebsite. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}