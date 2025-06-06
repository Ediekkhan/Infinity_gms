import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock, BarChart2, TrendingUp, Award, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const upcomingClasses = [
    {
      id: 1,
      title: 'Strength Training',
      time: '6:00 AM - 7:00 AM',
      day: 'Monday',
      instructor: 'Alex Peterson',
    },
    {
      id: 2,
      title: 'Yoga Flow',
      time: '5:30 PM - 6:30 PM',
      day: 'Wednesday',
      instructor: 'Maya Rodriguez',
    },
  ];

  const fitnessStats = [
    {
      id: 1,
      name: 'Classes Attended',
      value: 12,
      trend: '+3',
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 2,
      name: 'Hours Trained',
      value: 24,
      trend: '+5',
      icon: <Clock className="h-6 w-6 text-green-500" />,
    },
    {
      id: 3,
      name: 'Fitness Score',
      value: 78,
      trend: '+2',
      icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
    },
  ];

  const currentStreak = 5;

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name.split(' ')[0]}!</h1>
        <p className="text-gray-600">Here's an overview of your fitness journey.</p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fitnessStats.map((stat) => (
              <div key={stat.id} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg">{stat.icon}</div>
                  <div className="flex items-center px-2 py-1 bg-green-100 text-green-800 text-sm rounded-md">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.name}</div>
              </div>
            ))}
          </div>

          {/* Upcoming Classes */}
          <div className="card">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Upcoming Classes</h2>
              <Link to="/user/classes" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cls.title}</h3>
                      <div className="text-sm text-gray-500">
                        {cls.day}, {cls.time} • {cls.instructor}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-secondary text-sm">Check In</button>
                </div>
              ))}
            </div>
            {upcomingClasses.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No upcoming classes. Browse and book classes to get started!
              </div>
            )}
          </div>

          {/* Workout History */}
          <div className="card">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Current Streak</h3>
                    <div className="text-sm text-gray-500">Keep up the great work!</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">{currentStreak} days</div>
              </div>

              <h3 className="font-semibold mb-3">Activity Feed</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-4 w-4 mt-1 rounded-full bg-blue-500"></div>
                  <div className="ml-3">
                    <p className="text-sm">
                      <span className="font-medium">You attended</span> Yoga Flow class
                    </p>
                    <p className="text-xs text-gray-500">Yesterday at 5:30 PM</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-4 w-4 mt-1 rounded-full bg-green-500"></div>
                  <div className="ml-3">
                    <p className="text-sm">
                      <span className="font-medium">You reached</span> 10 classes milestone
                    </p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-4 w-4 mt-1 rounded-full bg-purple-500"></div>
                  <div className="ml-3">
                    <p className="text-sm">
                      <span className="font-medium">You booked</span> Strength Training class
                    </p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Membership Card */}
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <h2 className="text-lg font-bold mb-1">Pro Membership</h2>
              <p className="text-sm text-blue-100">Valid until Oct 15, 2025</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>65% of membership used</span>
                  <span>105 days left</span>
                </div>
              </div>
              <Link to="/user/membership" className="btn btn-primary w-full">
                Manage Membership
              </Link>
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Notifications</h2>
              <span className="bg-red-500 text-white text-xs py-1 px-2 rounded-full">3</span>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-4 hover:bg-gray-50">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">New HIIT class added</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Membership renewal reminder</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Fitness assessment scheduled</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Notifications
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/classes" className="btn btn-secondary w-full justify-center">
                Book a Class
              </Link>
              <button className="btn btn-secondary w-full">
                View Fitness Report
              </button>
              <button className="btn btn-secondary w-full">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;