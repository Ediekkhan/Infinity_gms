import React, { useState } from 'react';
import { Search, Filter, Edit, Trash, Plus, ChevronDown, Users, UserCheck, UserX, Mail, Phone } from 'lucide-react';

// Mock data for users
const initialUsersData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    membershipPlan: 'Pro',
    membershipStatus: 'active',
    joinDate: '2024-01-15',
    lastActivity: '2024-03-10',
    role: 'user',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 234-5678',
    membershipPlan: 'Elite',
    membershipStatus: 'active',
    joinDate: '2023-11-20',
    lastActivity: '2024-03-12',
    role: 'user',
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@email.com',
    phone: '(555) 345-6789',
    membershipPlan: 'Basic',
    membershipStatus: 'expired',
    joinDate: '2023-08-10',
    lastActivity: '2024-02-28',
    role: 'user',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '(555) 456-7890',
    membershipPlan: 'Pro',
    membershipStatus: 'active',
    joinDate: '2024-02-01',
    lastActivity: '2024-03-11',
    role: 'user',
  },
  {
    id: 5,
    name: 'Alex Peterson',
    email: 'alex.peterson@email.com',
    phone: '(555) 567-8901',
    membershipPlan: 'Elite',
    membershipStatus: 'active',
    joinDate: '2023-05-15',
    lastActivity: '2024-03-12',
    role: 'admin',
  },
];

// Filter options
const membershipPlans = ['All Plans', 'Basic', 'Pro', 'Elite'];
const membershipStatuses = ['All Statuses', 'active', 'expired', 'suspended'];
const userRoles = ['All Roles', 'user', 'admin'];

const ManageUsers: React.FC = () => {
  const [usersData, setUsersData] = useState(initialUsersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('All Plans');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingUser, setEditingUser] = useState<any>(null);

  // Filter users based on selected filters and search term
  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.phone.includes(searchTerm);
    
    const matchesPlan = selectedPlan === 'All Plans' || user.membershipPlan === selectedPlan;
    const matchesStatus = selectedStatus === 'All Statuses' || user.membershipStatus === selectedStatus;
    const matchesRole = selectedRole === 'All Roles' || user.role === selectedRole;
    
    return matchesSearch && matchesPlan && matchesStatus && matchesRole;
  });

  const handleDeleteUser = (id: number) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setUsersData(usersData.filter(user => user.id !== deleteId));
      setIsModalOpen(false);
      setDeleteId(null);
    }
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
  };

  const handleSaveUser = (updatedUser: any) => {
    setUsersData(usersData.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setEditingUser(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'suspended':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Basic':
        return 'bg-gray-100 text-gray-800';
      case 'Pro':
        return 'bg-blue-100 text-blue-800';
      case 'Elite':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manage Users</h1>
          <p className="text-gray-600">View and manage gym members and staff</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-1" />
          Add New User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{usersData.length}</div>
              <div className="text-sm text-gray-500">Total Users</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {usersData.filter(u => u.membershipStatus === 'active').length}
              </div>
              <div className="text-sm text-gray-500">Active Members</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg mr-3">
              <UserX className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {usersData.filter(u => u.membershipStatus === 'expired').length}
              </div>
              <div className="text-sm text-gray-500">Expired Members</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {usersData.filter(u => u.role === 'admin').length}
              </div>
              <div className="text-sm text-gray-500">Admin Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="form-input pl-10 py-2 w-full"
              placeholder="Search users by name, email, or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <button
            className="md:hidden btn btn-secondary flex items-center justify-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex gap-4">
            <select
              className="form-input py-2"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
            >
              {membershipPlans.map(plan => (
                <option key={plan} value={plan}>{plan}</option>
              ))}
            </select>

            <select
              className="form-input py-2"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {membershipStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            <select
              className="form-input py-2"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {userRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden space-y-4 p-4 bg-gray-50 rounded-md">
            <div>
              <label className="form-label">Membership Plan</label>
              <select
                className="form-input w-full"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                {membershipPlans.map(plan => (
                  <option key={plan} value={plan}>{plan}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Status</label>
              <select
                className="form-input w-full"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {membershipStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Role</label>
              <select
                className="form-input w-full"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                {userRoles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Membership
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">
                            {user.role === 'admin' ? 'Administrator' : 'Member'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="h-4 w-4 mr-1" />
                        <span className="mr-4">{user.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Phone className="h-4 w-4 mr-1" />
                        <span>{user.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPlanColor(user.membershipPlan)}`}>
                        {user.membershipPlan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.membershipStatus)}`}>
                        {user.membershipStatus.charAt(0).toUpperCase() + user.membershipStatus.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                        onClick={() => handleEditUser(user)}
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    No users found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg max-w-md w-full p-6 z-10">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete this user? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="btn bg-red-600 hover:bg-red-700 text-white"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg max-w-md w-full p-6 z-10">
            <h3 className="text-lg font-bold mb-4">Edit User</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSaveUser(editingUser);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input w-full"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input w-full"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-input w-full"
                    value={editingUser.phone}
                    onChange={(e) => setEditingUser({...editingUser, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="form-label">Membership Plan</label>
                  <select
                    className="form-input w-full"
                    value={editingUser.membershipPlan}
                    onChange={(e) => setEditingUser({...editingUser, membershipPlan: e.target.value})}
                  >
                    <option value="Basic">Basic</option>
                    <option value="Pro">Pro</option>
                    <option value="Elite">Elite</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Status</label>
                  <select
                    className="form-input w-full"
                    value={editingUser.membershipStatus}
                    onChange={(e) => setEditingUser({...editingUser, membershipStatus: e.target.value})}
                  >
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;