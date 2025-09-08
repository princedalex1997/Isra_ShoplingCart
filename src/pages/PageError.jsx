import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageError({ code = 404, message = "Page Not Found" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-center p-6">
      {/* Icon */}
      <div className="bg-white shadow-lg rounded-full p-6 mb-6">
        <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse" />
      </div>

      {/* Error Code */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-4">
        {code}
      </h1>

      {/* Error Message */}
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
        {message}
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <Link
         to="/"
          className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition duration-300"
        >
          Go Home
        </Link>
        
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 rounded-2xl bg-gray-600 hover:bg-gray-700 text-white font-semibold shadow-lg transition duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
