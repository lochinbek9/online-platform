import { Home, Info, Mail, Menu, Zap,  } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
    
  return (
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
  )
}

export default Navbar