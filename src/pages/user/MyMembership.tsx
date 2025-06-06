import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar, CreditCard, CheckCircle, Clock, Award, AlertCircle, ChevronRight } from 'lucide-react';

const MyMembership: React.FC = () => {
  const { user } = useAuth();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Mock membership data
  const currentMembership = {
    plan: 'Pro',
    price: 59,
    startDate: '2024-01-15',
    endDate: '2025-01-15',
    status: 'active',
    daysRemaining: 105,
    autoRenew: true,
  };

  const membershipPlans = [
    {
      id: 1,
      name: 'Basic',
      price: 29,
      features: [
        'Gym access (6 AM - 10 PM)',
        'Basic fitness assessment',
        '2 group classes per week',
      ],
      current: false,
    },
    {
      id: 2,
      name: 'Pro',
      price: 59,
      features: [
        '24/7 gym access',
        'Advanced fitness assessment',
        'Unlimited group classes',
        '2 personal training sessions/month',
      ],
      current: true,
    },
    {
      id: 3,
      name: 'Elite',
      price: 99,
      features: [
        '24/7 gym access',
        'Complete fitness assessment',
        'Unlimited group classes',
        '4 personal training sessions/month',
        'Monthly nutrition consultation',
      ],
      current: false,
    },
  ];

  const membershipHistory = [
    {
      date: '2024-01-15',
      plan: 'Pro',
      amount: 59,
      status: 'paid',
    },
    {
      date: '2023-12-15',
      plan: 'Pro',
      amount: 59,
      status: 'paid',
    },
    {
      date: '2023-11-15',
      plan: 'Basic',
      amount: 29,
      status: 'paid',
    },
  ];

  const handleUpgrade = (planName: string) => {
    // Handle membership upgrade
    console.log(`Upgrading to ${planName}`);
    setShowUpgradeModal(false);
  };

  const handleCancelMembership = () => {
    // Handle membership cancellation
    console.log('Cancelling membership');
  };

  const toggleAutoRenew = () => {
    // Handle auto-renew toggle
    console.log('Toggling auto-renew');
  };

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Membership</h1>
        <p className="text-gray-600">Manage your membership plan and billing information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Membership */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{currentMembership.plan} Membership</h2>
                  <p className="text-blue-100">Active since {new Date(currentMembership.startDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">${currentMembership.price}</div>
                  <div className="text-sm text-blue-100">per month</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium">Expires</div>
                    <div className="text-sm text-gray-600">{new Date(currentMembership.endDate).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium">{currentMembership.daysRemaining} days remaining</div>
                    <div className="text-sm text-gray-600">Until renewal</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Membership Progress</span>
                  <span className="text-sm text-gray-500">
                    {Math.round(((365 - currentMembership.daysRemaining) / 365) * 100)}% complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${((365 - currentMembership.daysRemaining) / 365) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium">Auto-renewal is {currentMembership.autoRenew ? 'enabled' : 'disabled'}</span>
                </div>
                <button 
                  onClick={toggleAutoRenew}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  {currentMembership.autoRenew ? 'Disable' : 'Enable'}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setShowUpgradeModal(true)}
                  className="btn btn-primary flex-1"
                >
                  Upgrade Plan
                </button>
                <button className="btn btn-secondary flex-1">
                  Renew Now
                </button>
                <button 
                  onClick={handleCancelMembership}
                  className="btn bg-red-600 hover:bg-red-700 text-white flex-1"
                >
                  Cancel Membership
                </button>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="card">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Billing History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {membershipHistory.map((record, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {new Date(record.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {record.plan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        ${record.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">
                          Download Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Method */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4">
              <CreditCard className="h-8 w-8 text-gray-400 mr-3" />
              <div>
                <div className="font-medium">•••• •••• •••• 4242</div>
                <div className="text-sm text-gray-500">Expires 12/26</div>
              </div>
            </div>
            <button className="btn btn-secondary w-full">
              Update Payment Method
            </button>
          </div>

          {/* Membership Benefits */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Your Benefits</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm">24/7 gym access</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm">Unlimited group classes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm">2 personal training sessions/month</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-sm">Advanced fitness assessment</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <div className="space-y-3">
              <button className="btn btn-secondary w-full text-left">
                Contact Support
              </button>
              <button className="btn btn-secondary w-full text-left">
                View FAQ
              </button>
              <button className="btn btn-secondary w-full text-left">
                Membership Terms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg max-w-4xl w-full mx-4 p-6 z-10 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Upgrade Your Membership</h3>
              <button 
                onClick={() => setShowUpgradeModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {membershipPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`card hover:shadow-xl transition-shadow relative ${
                    plan.current ? 'border-2 border-blue-600' : ''
                  }`}
                >
                  {plan.current && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Current Plan
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-4">${plan.price}<span className="text-lg text-gray-500">/mo</span></div>
                    <ul className="space-y-2 mb-6 text-left">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleUpgrade(plan.name)}
                      className={`btn w-full ${
                        plan.current 
                          ? 'btn-secondary cursor-not-allowed' 
                          : 'btn-primary'
                      }`}
                      disabled={plan.current}
                    >
                      {plan.current ? 'Current Plan' : 'Upgrade'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMembership;