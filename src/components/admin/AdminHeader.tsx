import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, Search } from 'lucide-react';

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Menu button (mobile only) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search */}
        <div className="relative hidden md:block flex-1 max-w-md ml-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="form-input pl-10 py-2 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center">
          {/* Notifications */}
          <div className="relative">
            <button className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>

          {/* Back to site */}
          <button
            onClick={() => navigate('/')}
            className="ml-4 px-3 py-1 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            View Site
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;