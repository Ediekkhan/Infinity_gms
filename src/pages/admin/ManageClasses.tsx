import React, { useState } from 'react';
import { Calendar, Clock, Edit, Trash, Users, Plus, Filter, Search, ChevronDown } from 'lucide-react';

// Mock data for classes
const initialClassesData = [
  {
    id: 1,
    title: 'Strength Training',
    instructor: 'Alex Peterson',
    time: '6:00 AM - 7:00 AM',
    days: ['Monday', 'Wednesday', 'Friday'],
    level: 'Intermediate',
    capacity: 20,
    enrolled: 15,
    category: 'Strength',
    location: 'Main Gym - Weight Room',
  },
  {
    id: 2,
    title: 'Yoga Flow',
    instructor: 'Maya Rodriguez',
    time: '5:30 PM - 6:30 PM',
    days: ['Tuesday', 'Thursday'],
    level: 'All Levels',
    capacity: 15,
    enrolled: 10,
    category: 'Yoga',
    location: 'Studio 2 - Mind & Body Room',
  },
  {
    id: 3,
    title: 'HIIT Cardio',
    instructor: 'James Wilson',
    time: '7:00 PM - 8:00 PM',
    days: ['Monday', 'Wednesday', 'Friday'],
    level: 'Advanced',
    capacity: 18,
    enrolled: 16,
    category: 'Cardio',
    location: 'Main Gym - Activity Area',
  },
  {
    id: 4,
    title: 'Pilates Reformer',
    instructor: 'Sophie Chen',
    time: '9:00 AM - 10:00 AM',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    level: 'Intermediate',
    capacity: 12,
    enrolled: 8,
    category: 'Pilates',
    location: 'Studio 1 - Pilates Room',
  },
  {
    id: 5,
    title: 'Spin Cycle',
    instructor: 'Michael Brown',
    time: '6:00 PM - 7:00 PM',
    days: ['Monday', 'Wednesday', 'Friday'],
    level: 'All Levels',
    capacity: 25,
    enrolled: 20,
    category: 'Cardio',
    location: 'Cycling Room',
  },
];

// Filter options
const categories = ['All Categories', 'Strength', 'Cardio', 'Yoga', 'Pilates', 'Dance'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const instructors = ['All Instructors', 'Alex Peterson', 'Maya Rodriguez', 'James Wilson', 'Sophie Chen', 'Michael Brown'];

const ManageClasses: React.FC = () => {
  const [classesData, setClassesData] = useState(initialClassesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedInstructor, setSelectedInstructor] = useState('All Instructors');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Filter classes based on selected filters and search term
  const filteredClasses = classesData.filter(cls => {
    const matchesSearch = cls.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cls.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || cls.category === selectedCategory;
    
    const matchesLevel = selectedLevel === 'All Levels' || cls.level === selectedLevel;
    
    const matchesInstructor = selectedInstructor === 'All Instructors' || cls.instructor === selectedInstructor;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesInstructor;
  });

  const handleDeleteClass = (id: number) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setClassesData(classesData.filter(cls => cls.id !== deleteId));
      setIsModalOpen(false);
      setDeleteId(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manage Classes</h1>
          <p className="text-gray-600">Add, edit, or remove fitness classes</p>
        </div>
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-1" />
          Add New Class
        </button>
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
              placeholder="Search classes by name or instructor"
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
            {/* Category Filter */}
            <select
              className="form-input py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              className="form-input py-2"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            {/* Instructor Filter */}
            <select
              className="form-input py-2"
              value={selectedInstructor}
              onChange={(e) => setSelectedInstructor(e.target.value)}
            >
              {instructors.map(instructor => (
                <option key={instructor} value={instructor}>{instructor}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden space-y-4 p-4 bg-gray-50 rounded-md">
            <div>
              <label className="form-label">Category</label>
              <select
                className="form-input w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Level</label>
              <select
                className="form-input w-full"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Instructor</label>
              <select
                className="form-input w-full"
                value={selectedInstructor}
                onChange={(e) => setSelectedInstructor(e.target.value)}
              >
                {instructors.map(instructor => (
                  <option key={instructor} value={instructor}>{instructor}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Classes Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((cls) => (
                  <tr key={cls.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{cls.title}</div>
                          <div className="text-sm text-gray-500">{cls.instructor}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{cls.days.join(', ')}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{cls.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{cls.enrolled}/{cls.capacity}</span>
                      </div>
                      <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-2">
                        <div 
                          className="h-1.5 rounded-full bg-blue-600" 
                          style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        cls.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        cls.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        cls.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {cls.level}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{cls.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cls.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDeleteClass(cls.id)}
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    No classes found matching your search criteria
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
              Are you sure you want to delete this class? This action cannot be undone.
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
    </div>
  );
};

export default ManageClasses;