import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Clock, Calendar, Users, ChevronDown } from 'lucide-react';

// Mock data for classes
const classesData = [
  {
    id: 1,
    title: 'Strength Training',
    instructor: 'Alex Peterson',
    time: '6:00 AM - 7:00 AM',
    days: ['Monday', 'Wednesday', 'Friday'],
    level: 'Intermediate',
    capacity: 20,
    enrolled: 15,
    description: 'Build muscle and increase your metabolism with our expert-led strength training class.',
    image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Strength',
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
    description: 'Improve flexibility, balance, and mental clarity with our relaxing yoga flow sessions.',
    image: 'https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Yoga',
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
    description: 'Maximize calorie burn and boost endurance with high-intensity interval training.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Cardio',
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
    description: 'Strengthen your core and improve posture with our specialized Pilates Reformer class.',
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Pilates',
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
    description: 'Get your heart pumping with our high-energy indoor cycling class set to motivating music.',
    image: 'https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Cardio',
  },
  {
    id: 6,
    title: 'Barre Fitness',
    instructor: 'Emily Johnson',
    time: '5:00 PM - 6:00 PM',
    days: ['Tuesday', 'Thursday'],
    level: 'All Levels',
    capacity: 15,
    enrolled: 12,
    description: 'Combine elements of ballet, Pilates, and yoga for a complete body workout that improves strength and flexibility.',
    image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Dance',
  },
];

// Category filter options
const categories = ['All Categories', 'Strength', 'Cardio', 'Yoga', 'Pilates', 'Dance'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const days = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Classes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [showFilters, setShowFilters] = useState(false);

  // Filter classes based on selected filters and search term
  const filteredClasses = classesData.filter(cls => {
    const matchesSearch = cls.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cls.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cls.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || cls.category === selectedCategory;
    
    const matchesLevel = selectedLevel === 'All Levels' || cls.level === selectedLevel;
    
    const matchesDay = selectedDay === 'All Days' || cls.days.includes(selectedDay);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDay;
  });

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Class Schedule</h1>
        <p className="text-gray-600">Find and book your favorite fitness classes</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="form-input pl-10 py-3 w-full"
              placeholder="Search by class name, instructor, or keywords"
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
              className="form-input py-3"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              className="form-input py-3"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            {/* Day Filter */}
            <select
              className="form-input py-3"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {days.map(day => (
                <option key={day} value={day}>{day}</option>
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
              <label className="form-label">Day</label>
              <select
                className="form-input w-full"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Class Results */}
      {filteredClasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map(cls => (
            <div key={cls.id} className="card group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {cls.enrolled / cls.capacity > 0.8 && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 m-3 rounded font-medium">
                    Almost Full
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{cls.days.join(', ')}</span>
                  <Clock className="h-4 w-4 text-blue-600 ml-4 mr-2" />
                  <span className="text-sm text-gray-600">{cls.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{cls.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">Instructor: {cls.instructor}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    cls.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    cls.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {cls.level}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {cls.enrolled}/{cls.capacity}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link 
                    to={`/classes/${cls.id}`} 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                  </Link>
                  <button className="btn btn-primary text-sm">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="max-w-md mx-auto">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Classes Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any classes matching your search criteria. Try adjusting your filters or search term.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Categories');
                setSelectedLevel('All Levels');
                setSelectedDay('All Days');
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes;