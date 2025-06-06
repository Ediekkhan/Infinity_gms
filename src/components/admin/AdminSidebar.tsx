import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut,
  X,
  Dumbbell
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { logout, user } = useAuth();

  const navItems = [
    { to: '/admin/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { to: '/admin/users', icon: <Users />, label: 'Users' },
    { to: '/admin/classes', icon: <Calendar />, label: 'Classes' },
    { to: '/admin/memberships', icon: <CreditCard />, label: 'Memberships' },
    { to: '/admin/settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:w-64 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Mobile close button */}
      <div className="lg:hidden absolute right-4 top-4">
        <button onClick={toggleSidebar} className="text-white p-2">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center p-5 border-b border-gray-800">
        <Dumbbell className="h-8 w-8 text-blue-500" />
        <span className="ml-2 text-xl font-bold">FitFlex Admin</span>
      </div>

      {/* Admin Info */}
      <div className="px-5 py-4 border-b border-gray-800">
        <div className="flex items-center">
          <div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center text-lg font-semibold">
            {user?.name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-5 py-3 transition-colors ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 w-full p-5 border-t border-gray-800">
        <button
          onClick={logout}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;