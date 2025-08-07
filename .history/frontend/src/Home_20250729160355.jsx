
    import React, { useState } from 'react';

 function Home() {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      alert('Connected to database successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-red-600 flex flex-col">
      {/* Window Header */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between text-sm text-gray-700 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">📚</span>
          </div>
          <span>Southeast University Library Management System</span>
        </div>
        <div className="flex space-x-1">
          <button className="w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center">
            <span className="text-xs">−</span>
          </button>
          <button className="w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center">
            <span className="text-xs">□</span>
          </button>
          <button className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center">
            <span className="text-white text-xs">×</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* University Logo and Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4 border-4 border-yellow-300">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm"></span>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-white text-3xl font-bold tracking-wide">
                SOUTHEAST UNIVERSITY
              </h1>
              <p className="text-yellow-200 text-sm mt-1 italic">
                Meeting the Challenges of Time
              </p>
            </div>
          </div>
        </div>

        {/* System Title */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-3 rounded-full shadow-lg mb-16">
          <h2 className="text-red-800 text-xl font-semibold">
            Library Management System
          </h2>
        </div>

        {/* Connect Button */}
        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className="bg-gray-200 hover:bg-gray-100 text-gray-800 font-medium px-8 py-3 rounded shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isConnecting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"></div>
              CONNECTING...
            </div>
          ) : (
            'CONNECT TO DATABASE'
          )}
        </button>

        {/* Status Text */}
        {isConnecting && (
          <p className="text-yellow-200 text-sm mt-4 animate-pulse">
            Establishing database connection...
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-xs py-2 px-4 flex justify-between items-center">
        <span>Library Management System - Southeast University</span>
        <span>Ready</span>
      </div>
    </div>
  );
}
export default Home;