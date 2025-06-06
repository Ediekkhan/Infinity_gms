import React, { useState } from 'react';
import { Plus, Edit, Trash, Users, DollarSign, Calendar, TrendingUp, Search, Filter } from 'lucide-react';

// Mock data for membership plans
const initialMembershipPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    duration: 30,
    description: 'Perfect for beginners',
    features: [
      'Gym access (6 AM - 10 PM)',
      'Basic fitness assessment',
      '2 group classes per week',
    ],
    activeMembers: 192,
    totalRevenue: 5568,
    isActive: true,
  },
  {
    id: 2,
    name: 'Pro',
    price: 59,
    duration: 30,
    description: 'For dedicated fitness enthusiasts',
    features: [
      '24/7 gym access',
      'Advanced fitness assessment',
      'Unlimited group classes',
      '2 personal training sessions/month',
    ],
    activeMembers: 246,
    totalRevenue: 14514,
    isActive: true,
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    duration: 30,
    description: 'The complete fitness experience',
    features: [
      '24/7 gym access',
      'Complete fitness assessment',
      'Unlimited group classes',
      '4 personal training sessions/month',
      'Monthly nutrition consultation',
    ],
    activeMembers: 110,
    totalRevenue: 10890,
    isActive: true,
  },
];

// Mock data for membership analytics
const membershipStats = {
  totalRevenue: 30972,
  totalMembers: 548,
  averageRevenue: 56.5,
  growthRate: 12.5,
};

const ManageMemberships: React.FC = () => {
  const [membershipPlans, setMembershipPlans] = useState(initialMembershipPlans);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<any>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '',
    description: '',
    features: [''],
    isActive: true,
  });

  // Filter plans based on search term
  const filteredPlans = membershipPlans.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPlan = () => {
    setEditingPlan(null);
    setFormData({
      name: '',
      price: '',
      duration: '',
      description: '',
      features: [''],
      isActive: true,
    });
    setIsModalOpen(true);
  };

  const handleEditPlan = (plan: any) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      duration: plan.duration.toString(),
      description: plan.description,
      features: [...plan.features],
      isActive: plan.isActive,
    });
    setIsModalOpen(true);
  };

  const handleDeletePlan = (id: number) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setMembershipPlans(membershipPlans.filter(plan => plan.id !== deleteId));
      setShowDeleteModal(false);
      setDeleteId(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const planData = {
      ...formData,
      price: parseFloat(formData.price),
      duration: parseInt(formData.duration),
      features: formData.features.filter(feature => feature.trim() !== ''),
    };

    if (editingPlan) {
      // Update existing plan
      setMembershipPlans(membershipPlans.map(plan =>
        plan.id === editingPlan.id
          ? { ...plan, ...planData }
          : plan
      ));
    } else {
      // Add new plan
      const newPlan = {
        id: Math.max(...membershipPlans.map(p => p.id)) + 1,
        ...planData,
        activeMembers: 0,
        totalRevenue: 0,
      };
      setMembershipPlans([...membershipPlans, newPlan]);
    }

    setIsModalOpen(false);
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ''],
    });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manage Memberships</h1>
          <p className="text-gray-600">Create and manage membership plans</p>
        </div>
        <button 
          onClick={handleAddPlan}
          className="btn btn-primary flex items-center"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add New Plan
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">${membershipStats.totalRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Total Revenue</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{membershipStats.totalMembers}</div>
              <div className="text-sm text-gray-500">Active Members</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">${membershipStats.averageRevenue}</div>
              <div className="text-sm text-gray-500">Avg. Revenue/Member</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-lg mr-3">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{membershipStats.growthRate}%</div>
              <div className="text-sm text-gray-500">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="form-input pl-10 py-2 w-full"
            placeholder="Search membership plans"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Membership Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditPlan(plan)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeletePlan(plan.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="text-3xl font-bold mb-4">
                ${plan.price}
                <span className="text-lg text-gray-500 font-normal">/month</span>
              </div>

              <div className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="h-4 w-4 text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-600">{plan.activeMembers}</div>
                    <div className="text-xs text-gray-500">Active Members</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">${plan.totalRevenue.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Monthly Revenue</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  plan.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {plan.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Plan Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg max-w-md w-full p-6 z-10 max-h-screen overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">
              {editingPlan ? 'Edit Membership Plan' : 'Add New Membership Plan'}
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Plan Name</label>
                  <input
                    type="text"
                    className="form-input w-full"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Price (per month)</label>
                  <input
                    type="number"
                    className="form-input w-full"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="form-label">Duration (days)</label>
                  <input
                    type="number"
                    className="form-input w-full"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-input w-full"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Features</label>
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        className="form-input flex-1 mr-2"
                        value={feature}
                        onChange={(e) => updateFeature(index, e.target.value)}
                        placeholder="Enter feature"
                      />
                      {formData.features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeature}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Feature
                  </button>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                  />
                  <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                    Active plan (available for new subscriptions)
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn btn-primary"
                >
                  {editingPlan ? 'Update Plan' : 'Create Plan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg max-w-md w-full p-6 z-10">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete this membership plan? This action cannot be undone and may affect existing members.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDeleteModal(false)}
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
    </div>
  );
};

export default ManageMemberships;