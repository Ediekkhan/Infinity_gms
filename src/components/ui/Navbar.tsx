import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, ChevronDown, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll events to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">FitFlex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Home
            </NavLink>
            <NavLink to="/classes" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Classes
            </NavLink>
            <NavLink to="/memberships" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Memberships
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              About
            </NavLink>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                >
                  <span>Hi, {user?.name.split(' ')[0]}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {isAdmin ? (
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    ) : (
                      <Link
                        to="/user/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        My Dashboard
                      </Link>
                    )}
                    <Link
                      to="/user/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-3">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Home
            </NavLink>
            <NavLink to="/classes" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Classes
            </NavLink>
            <NavLink to="/memberships" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Memberships
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              About
            </NavLink>

            {isAuthenticated ? (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                {isAdmin ? (
                  <Link to="/admin/dashboard" className="nav-link">
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link to="/user/dashboard" className="nav-link">
                    My Dashboard
                  </Link>
                )}
                <Link to="/user/profile" className="nav-link">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="nav-link text-left text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary w-full text-center">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;