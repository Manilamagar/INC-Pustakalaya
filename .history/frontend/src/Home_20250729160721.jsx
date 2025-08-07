
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
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* University Logo and Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4 border-4 border-yellow-300">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img
                  src="https://www.google.com/search?sca_esv=e948bafec9f39f8c&rlz=1C1CHBF_enNP1151NP1151&sxsrf=AE3TifOjye8jMSqDxXU15kA7qTF5FRRnCA:1753784457814&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIemkjk18Cn72Gp24fGkjjh6wQFVCbKXb4P6swJy4x5wjmC_909EqiJuKoJVBAt1bQqxuAxTVm5FaXw1YXOj1toa8WPxcw1gn6LYXewwLEtDLrjlF1DF5gsE1oM13IUcRi9WoWLy0RheFkcZrCqX8fIc9hqBDd7QkjIMco9MHF-AJTiny_Vw&q=%3Cimg+src%3D%22itahari+namuna+college.jpg%22+alt%3D%22University+Logo%22+className%3D%22rounded-full%22+/%3E&sa=X&ved=2ahUKEwidm_uc7OGOAxWrppUCHTkYFDIQtKgLegQIFBAB&biw=1536&bih=695&dpr=1.25#vhid=-1DEtrDICziFFM&vssid=mosaic"
                  alt="University Logo"
                  className="rounded-full"  
                />
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