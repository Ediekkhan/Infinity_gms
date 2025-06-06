import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Phone, MapPin, Camera, Save, Lock } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '(123) 456-7890',
    address: '123 Fitness Street, Gym City, GC 12345',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to update the user's profile
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Picture Section */}
          <div className="md:col-span-1">
            <div className="card p-6 text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                    <User className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-bold mb-1">{user?.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{user?.email}</p>
              <p className="text-sm text-gray-500">Member since January 2024</p>
            </div>
          </div>

          {/* Profile Information */}
          <div className="md:col-span-2">
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Personal Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="form-label flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  </div>

                  {isEditing && (
                    <>
                      <div className="border-t border-gray-200 pt-6 mt-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center">
                          <Lock className="h-4 w-4 mr-2" />
                          Change Password
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="currentPassword" className="form-label">
                              Current Password
                            </label>
                            <input
                              type="password"
                              id="currentPassword"
                              name="currentPassword"
                              value={formData.currentPassword}
                              onChange={handleInputChange}
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label htmlFor="newPassword" className="form-label">
                              New Password
                            </label>
                            <input
                              type="password"
                              id="newPassword"
                              name="newPassword"
                              value={formData.newPassword}
                              onChange={handleInputChange}
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label htmlFor="confirmPassword" className="form-label">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="form-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary flex items-center">
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;