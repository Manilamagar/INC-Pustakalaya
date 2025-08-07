import React from 'react';

const Home = () => {
    return (
        <>

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to INC Pustakalaya</h1>
        <p className="text-lg md:text-xl mb-6">Your Digital Gateway to Knowledge</p>
        <Link to="/books">
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
            Browse Books
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Book Borrowing</h3>
            <p className="text-gray-600">Easily borrow books and keep track of your library activity online.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">User-Friendly Dashboard</h3>
            <p className="text-gray-600">Manage users, books, issues, and returns all in one place.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Search & Discover</h3>
            <p className="text-gray-600">Search for your favorite books by title, author, or category.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join INC Pustakalaya Today</h2>
        <p className="mb-6">Register now to start borrowing and managing your favorite books.</p>
        <Link to="/signup">
          <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;


        </>
       
    );
};

export default Home;