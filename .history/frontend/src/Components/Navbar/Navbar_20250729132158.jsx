import React,{ useEffect, useState } from "react";
import './Navbar.css';

export default function PremiumNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const closeMenus = () => setOpenDropdown(null);
    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div className="bg-blue-600 group-hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                <i className="fas fa-cube text-white text-xl"></i>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                BiblioHub
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <i className="fas fa-home mr-2"></i>
              Home
            </button>

            <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <i className=""></i>
                    ℹ️ About
            </button>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("products");
                }}
                className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <i className=""></i>
               📖 Books
                <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-200"></i>
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 border border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Solutions
                  </div>
                  {["Browse Books", "Add New Book", "Popular Books", "Categories"].map((label, i) => (
                    <a
                      href="#"
                      key={i}
                      className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                    >
                      <i className={`fas ${label === "Browse Books" ? 
                        "fa-search text-blue-500" : label === "Add New Book" ? "fa-plus text-green-500" : 
                        label === "Popular Books" ? "fa-fire text-red-500" : "fa-list text-purple-500"} mr-3 w-5 text-center`}></i>
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg
               hover:bg-blue-50 transition-colors duration-200"
            >
              <i className=""></i>
              👥 Members
            </a>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("resources");
                }}
                className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <i className=""></i>
              📋 Issue/Return
                <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-200"></i>
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 border border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Solutions
                  </div>
                  {["Issue Book","Return Book","Overdue Books","Reservation"].map((label, i) => (
                    <a
                      href="#"
                      key={i}
                      className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                    >
                      <i className={`fas ${label === "Issue Book" ? 
                        "fa-book-open text-green-500" : label === "Return Book" ? "fa-undo text-blue-500" : 
                        label === "Overdue Books" ? "fa-exclamation-triangle text-red-500" : "fa-calendar-check text-purple-500"} mr-3 w-5 text-center`}></i>
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <i className=""></i>
                 📞 Contact 
              <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                New
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <input type="text" className="search-input" placeholder="Search books, authors, members..." />
            <span className="search-icon">🔍</span>

            {/* Login Button */}
            <a class="white" href="#"
             data-spm-click="gostr=/lzdpub.header.tbar;locaid=login" data-spm-anchor-id="a2a0e.tm80335409.header.login">
              <i className="fas fa-sign-in-alt mr-2"></i>Login</a>
            
            {/* Signup Button */}
            <a class="white" href="singup.jsx" 
            data-spm-click="gostr=/lzdpub.header.tbar;locaid=signup"data-spm-anchor-id="a2a0e.tm80335409.header.signup">
              <i className="fas fa-user-plus mr-2"></i>Sign Up</a>
            

            <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {["Home", "About", "Books", "Members", "Issue/Return", "Contact"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className={`fas ${
                  item === "Home"
                    ? "fa-home"
                    : item === "About"
                    ? "fa-info-circle"
                    : item === "Books"
                    ? "fa-book"
                    : item === "Members"
                    ? "fa-users"
                    : item === "Issue/Return"
                    ? "fa-exchange-alt"
                    : "fa-envelope"
                } text-blue-500 mr-3 w-5 text-center`}></i>
                {item}
              </a>
            ))}
            
            {/* Mobile Login/Signup */}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <a
                href="#"
                className="px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-sign-in-alt text-blue-500 mr-3 w-5 text-center"></i>
                Login
              </a>
              <a
                href="#"
                className="px-4 py-3 rounded-lg text-base font-medium bg-blue-600 text-white hover:bg-blue-700 flex items-center transition-colors duration-200 mx-4 mt-2"
              >
                <i className="fas fa-user-plus text-white mr-3 w-5 text-center"></i>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}