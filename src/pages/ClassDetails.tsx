import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, User, Users, ChevronLeft, Award, MapPin } from 'lucide-react';

// Mock class data (would come from API in a real app)
const classesData = [
  {
    id: '1',
    title: 'Strength Training',
    instructor: 'Alex Peterson',
    time: '6:00 AM - 7:00 AM',
    days: ['Monday', 'Wednesday', 'Friday'],
    level: 'Intermediate',
    capacity: 20,
    enrolled: 15,
    description: 'Build muscle and increase your metabolism with our expert-led strength training class. This class focuses on resistance training using free weights, machines, and bodyweight exercises to build strength and endurance.',
    longDescription: `Our Strength Training class is designed to help you build lean muscle mass, increase your metabolism, and improve overall strength. 

Each session includes a proper warm-up, a comprehensive workout targeting major muscle groups, and a cool-down period with stretching.

The class is suitable for intermediate fitness levels, but modifications can be provided for beginners or those with specific needs.

Equipment used includes dumbbells, kettlebells, resistance bands, and weight machines. Proper form and technique will be emphasized to ensure safety and effectiveness.`,
    image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Strength',
    location: 'Main Gym - Weight Room',
    instructor_bio: 'Alex has been a certified personal trainer for over 8 years with specializations in strength training and sports performance. His motivating teaching style helps members push their limits safely.',
    instructor_image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '2',
    title: 'Yoga Flow',
    instructor: 'Maya Rodriguez',
    time: '5:30 PM - 6:30 PM',
    days: ['Tuesday', 'Thursday'],
    level: 'All Levels',
    capacity: 15,
    enrolled: 10,
    description: 'Improve flexibility, balance, and mental clarity with our relaxing yoga flow sessions.',
    longDescription: `Yoga Flow is a dynamic practice that connects breath with movement. This class incorporates a series of flowing postures to strengthen the body and mind while improving flexibility and balance.

Each session begins with centering and breathing exercises, progresses through a sequence of yoga postures, and concludes with relaxation.

This class is accessible to all levels, with options provided for beginners as well as more advanced practitioners. Props such as blocks and straps are available to help modify poses as needed.

Regular practice can help reduce stress, improve posture, increase body awareness, and enhance overall well-being.`,
    image: 'https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Yoga',
    location: 'Studio 2 - Mind & Body Room',
    instructor_bio: 'Maya is a certified yoga instructor with over 500 hours of training. Her classes emphasize the connection between breath and movement, creating a meditative and rejuvenating experience.',
    instructor_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  // Additional class data would be here
];

const ClassDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Find the class with the matching id
  const classData = classesData.find(c => c.id === id);

  // Handle if class is not found
  if (!classData) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Class Not Found</h2>
        <p className="mb-6">The class you're looking for doesn't exist or has been removed.</p>
        <Link to="/classes" className="btn btn-primary">
          View All Classes
        </Link>
      </div>
    );
  }

  // Handle booking (would connect to API in real app)
  const handleBookClass = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/classes/${id}` } } });
      return;
    }
    
    // Here you would make an API call to book the class
    alert('Class booked successfully!');
  };

  // Calculate available spots
  const availableSpots = classData.capacity - classData.enrolled;
  const isAlmostFull = availableSpots <= 3;

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/classes" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Classes
        </Link>
      </div>

      {/* Class Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden h-80">
            <img
              src={classData.image}
              alt={classData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="card p-6">
          <h1 className="text-3xl font-bold mb-2">{classData.title}</h1>
          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-blue-600 mr-2" />
            <span>Instructor: {classData.instructor}</span>
          </div>
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-blue-600 mr-2" />
            <span>{classData.days.join(', ')}</span>
          </div>
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-blue-600 mr-2" />
            <span>{classData.time}</span>
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
            <span>{classData.location}</span>
          </div>
          <div className="flex items-center mb-6">
            <Users className="h-5 w-5 text-blue-600 mr-2" />
            <span className={isAlmostFull ? 'text-orange-600 font-medium' : ''}>
              {availableSpots} {availableSpots === 1 ? 'spot' : 'spots'} available
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleBookClass}
              className="btn btn-primary w-full"
              disabled={availableSpots === 0}
            >
              {availableSpots === 0 ? 'Class Full' : 'Book Class'}
            </button>
            {!isAuthenticated && (
              <p className="text-xs text-center text-gray-500">
                You need to be logged in to book a class
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Class Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">About This Class</h2>
            <div className="mb-6 whitespace-pre-line text-gray-700">
              {classData.longDescription}
            </div>
            <div className="flex flex-wrap gap-3">
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                classData.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                classData.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                classData.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {classData.level}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                {classData.category}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                {classData.capacity} Capacity
              </span>
            </div>
          </div>

          {/* What to Bring */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">What to Bring</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                <span>Comfortable workout clothes</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                <span>Water bottle</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                <span>Towel</span>
              </li>
              {classData.category === 'Yoga' && (
                <li className="flex items-start">
                  <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                  <span>Yoga mat (or use one of ours)</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {/* Instructor Info */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Instructor</h2>
            <div className="flex items-center mb-4">
              <img
                src={classData.instructor_image}
                alt={classData.instructor}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold">{classData.instructor}</h3>
                <div className="flex items-center text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-600 ml-1 text-sm">(24 reviews)</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">{classData.instructor_bio}</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Classes by This Instructor
            </button>
          </div>

          {/* Similar Classes */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Similar Classes</h2>
            <div className="space-y-4">
              {classesData.filter(c => c.id !== id && c.category === classData.category).slice(0, 2).map(similarClass => (
                <Link
                  key={similarClass.id}
                  to={`/classes/${similarClass.id}`}
                  className="flex items-center hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <img
                    src={similarClass.image}
                    alt={similarClass.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{similarClass.title}</h3>
                    <p className="text-sm text-gray-600">{similarClass.days.join(', ')}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Reviews Preview */}
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Reviews</h2>
              <div className="flex items-center text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-black ml-1 font-medium">5.0</span>
              </div>
            </div>

            <div className="space-y-4 mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <span className="font-medium">Jessica K.</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Great class! Alex really knows how to push you while keeping it fun and safe."
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="font-medium">Mike R.</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "I've seen significant strength gains since I started taking this class. Highly recommended!"
                </p>
              </div>
            </div>

            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All 24 Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;