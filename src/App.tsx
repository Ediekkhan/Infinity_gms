import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/AdminRoute';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import ClassDetails from './pages/ClassDetails';
import MembershipPlans from './pages/MembershipPlans';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// User Pages
import Dashboard from './pages/user/Dashboard';
import Profile from './pages/user/Profile';
import MyClasses from './pages/user/MyClasses';
import MyMembership from './pages/user/MyMembership';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageClasses from './pages/admin/ManageClasses';
import ManageMemberships from './pages/admin/ManageMemberships';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="classes" element={<Classes />} />
            <Route path="classes/:id" element={<ClassDetails />} />
            <Route path="memberships" element={<MembershipPlans />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Protected User Routes */}
          <Route path="/user" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="classes" element={<MyClasses />} />
            <Route path="membership" element={<MyMembership />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="classes" element={<ManageClasses />} />
            <Route path="memberships" element={<ManageMemberships />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;