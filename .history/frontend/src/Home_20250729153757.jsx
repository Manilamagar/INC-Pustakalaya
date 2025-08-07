import React from 'react';

const Home = () => {
    return (
        <>
  <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 flex flex-col">
      {/* Header */}
      <div className="bg-red-800 text-white py-2 px-4 text-sm">
        Southeast University Library Management System
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* University Logo and Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-300 mr-4">
              <BookOpen className="w-8 h-8 text-red-800" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white"></h1>
              <p className="text-red-200 text-lg">Meeting the Challenges of Time</p>
            </div>
          </div>
          
          <div className="bg-red-500 text-white py-3 px-8 rounded-lg inline-block">
            <h2 className="text-2xl font-semibold">Library Management System</h2>
          </div>
        </div>
        
        {/* Connect Button */}
        <button 
          onClick={() => setCurrentScreen('setup')}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded font-semibold transition-colors"
        >
          CONNECT TO DATABASE
        </button>
      </div>
    </div>
        </>
       
    );
};

export default Home;