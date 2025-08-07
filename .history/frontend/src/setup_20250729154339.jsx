import React, { useState } from 'react';

const SetExample = () => {
    const [items, setItems] = useState(new Set());

    const addItem = (item) => {
        setItems(prev => new Set(prev).add(item));
    };

    const removeItem = (item) => {
        setItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(item);
            return newSet;
        });
    };

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
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-300 mr-4">
              <BookOpen className="w-8 h-8 text-red-800" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">SOUTHEAST UNIVERSITY</h1>
              <p className="text-red-200 text-lg">Meeting the Challenges of Time</p>
            </div>
          </div>
        </div>
        
        {/* Setup Message */}
        <p className="text-white text-center mb-2">
          It Seems you running for the first time. So, You need to setup database.
        </p>
        
        <h2 className="text-white text-2xl font-bold mb-8">Setup Database</h2>
        
        {/* Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 w-full max-w-md">
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="text-white w-32 text-right mr-4">IP Address:</label>
              <input 
                type="text"
                value={dbConfig.ipAddress}
                onChange={(e) => handleDbConfigChange('ipAddress', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="localhost"
              />
            </div>
            
            <div className="flex items-center">
              <label className="text-white w-32 text-right mr-4">Database Name:</label>
              <input 
                type="text"
                value={dbConfig.databaseName}
                onChange={(e) => handleDbConfigChange('databaseName', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="library_db"
              />
            </div>
            
            <div className="flex items-center">
              <label className="text-white w-32 text-right mr-4">Database Username:</label>
              <input 
                type="text"
               
                onChange={(e) => handleDbConfigChange('username', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="admin"
              />
            </div>
            
            <div className="flex items-center">
              <label className="text-white w-32 text-right mr-4">Database Password:</label>
              <input 
                type="password"
                value={dbConfig.password}
                onChange={(e) => handleDbConfigChange('password', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={handleExecute}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-2 rounded font-semibold transition-colors"
            >
              Execute
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default SetExample;