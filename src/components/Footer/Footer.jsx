
function Footer() {
  return (
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
  )
}

export default Footer