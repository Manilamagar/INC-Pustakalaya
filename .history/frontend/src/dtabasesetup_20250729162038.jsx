import React, { useState } from 'react';

export default function DatabaseSetupScreen() {
  const [formData, setFormData] = useState({
    ipAddress: '',
    databaseName: '',
    username: '',
    password: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExecute = () => {
    alert(`Database setup initiated with:\nIP: ${formData.ipAddress}\nDatabase: ${formData.databaseName}\nUsername: ${formData.username}`);
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
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4 border-4 border-yellow-300">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                </div>
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

        {/* Setup Message */}
        <div className="text-center mb-6">
          <p className="text-white text-sm">
            It Seems you running for the first time. So, You need to setup database.
          </p>
        </div>

        {/* Setup Database Title */}
        <h2 className="text-white text-2xl font-semibold mb-8 italic">
          Setup Database
        </h2>

        {/* Form Container */}
        <div className="w-full max-w-lg">
          {/* Form Fields */}
          <div className="space-y-4 mb-8">
            {/* IP Address */}
            <div className="flex items-center">
              <label className="text-white text-sm w-40 text-right mr-4">
                IP Address:
              </label>
              <input
                type="text"
                value={formData.ipAddress}
                onChange={(e) => handleInputChange('ipAddress', e.target.value)}
                className="w-48 px-3 py-2 bg-white border-2 border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            {/* Database Name */}
            <div className="flex items-center">
              <label className="text-white text-sm w-40 text-right mr-4">
                Database Name:
              </label>
              <input
                type="text"
                value={formData.databaseName}
                onChange={(e) => handleInputChange('databaseName', e.target.value)}
                className="w-48 px-3 py-2 bg-white border-2 border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            {/* Database Username */}
            <div className="flex items-center">
              <label className="text-white text-sm w-40 text-right mr-4">
                Database Username:
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-48 px-3 py-2 bg-white border-2 border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            {/* Database Password */}
            <div className="flex items-center">
              <label className="text-white text-sm w-40 text-right mr-4">
                Database Password:
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-48 px-3 py-2 bg-white border-2 border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Execute Button */}
          <div className="flex justify-center">
            <button
              onClick={handleExecute}
              className="bg-gray-200 hover:bg-gray-100 text-gray-800 font-medium px-8 py-2 rounded border-2 border-gray-300 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Execute
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-xs py-2 px-4 flex justify-between items-center">
        <span>Library Management System - </span>
        <span>Ready</span>
      </div>
    </div>
  );
}