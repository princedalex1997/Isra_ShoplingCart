import { Construction, Clock } from "lucide-react"; // optional icons
import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-center p-6">
      {/* Icon */}
      <div className="bg-white shadow-lg rounded-full p-6 mb-6">
        <Construction className="w-16 h-16 text-yellow-500 animate-bounce" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        🚧 Page Under Construction 🚧
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        We’re working hard to bring something amazing here.  
        Please check back later!
      </p>

      {/* Timer / Coming soon */}
      <div className="flex items-center gap-2 text-gray-700 mb-8">
        <Clock className="w-5 h-5 text-gray-500" />
        <span className="text-md font-medium">Launching Soon...</span>
      </div>

      {/* Button */}
      <Link 
      to="/"
      className="px-6 py-3 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-lg transition duration-300">
       Home  Page
      </Link>
    </div>
  );
}
