import React from 'react';

const Home = () => {
    return (
        <>
 <div className="min-h-screen bg-[#a60000] flex flex-col justify-center items-center text-white font-serif">
      <div className="absolute top-8 left-8">
        <img src="/INC.jpg
          alt="INC
          className="w-20 h-20"
        />
      </div>

      <h1 className="text-4xl font-bold mt-12">INC Pustakalaya</h1>
      <p className="text-sm mt-2 italic">Meeting the Challenges of Time</p>

      <h2 className="text-2xl mt-6">Library Management System</h2>

      <button className="mt-10 px-6 py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-300 transition">
        CONNECT TO DATABASE
      </button>
    </div>
        </>
       
    );
};

export default Home;