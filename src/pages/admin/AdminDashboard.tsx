import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar, 
  CreditCard,
  ChevronRight,
  Activity,
  Clock,
  UserPlus
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  // Mock data for dashboard
  const stats = [
    {
      title: 'Total Members',
      value: '548',
      change: '+12%',
      trend: 'up',
      icon: <Users className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Active Classes',
      value: '42',
      change: '+3',
      trend: 'up',
      icon: <Calendar className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Revenue (Monthly)',
      value: '$24,350',
      change: '+5%',
      trend: 'up',
      icon: <CreditCard className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Class Attendance',
      value: '86%',
      change: '-2%',
      trend: 'down',
      icon: <Activity className="h-6 w-6 text-orange-500" />,
    },
  ];

  const recentMembers = [
    { id: 1, name: 'Jennifer Adams', date: '2 hours ago', plan: 'Pro' },
    { id: 2, name: 'Michael Torres', date: '1 day ago', plan: 'Basic' },
    { id: 3, name: 'Sarah Johnson', date: '2 days ago', plan: 'Elite' },
    { id: 4, name: 'David Wilson', date: '3 days ago', plan: 'Pro' },
  ];

  const popularClasses = [
    { id: 1, name: 'HIIT Cardio', attendance: '94%', instructor: 'James Wilson' },
    { id: 2, name: 'Yoga Flow', attendance: '88%', instructor: 'Maya Rodriguez' },
    { id: 3, name: 'Strength Training', attendance: '85%', instructor: 'Alex Peterson' },
    { id: 4, name: 'Spin Cycle', attendance: '82%', instructor: 'Michael Brown' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of your gym's performance and key metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">{stat.icon}</div>
              <div className={`flex items-center px-2 py-1 text-sm rounded-md ${
                stat.trend === 'up' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {stat.trend === 'up' 
                  ? <TrendingUp className="h-3 w-3 mr-1" /> 
                  : <TrendingDown className="h-3 w-3 mr-1" />
                }
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Membership Overview */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <h2 className="text-xl font-bold mb-1">Membership Overview</h2>
            <p className="text-blue-100 text-sm">Distribution of current memberships</p>
          </div>
          <div className="p-6">
            {/* Membership Chart (simple representation) */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Basic</span>
                <span className="text-sm text-gray-500">35% (192 members)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-300 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Pro</span>
                <span className="text-sm text-gray-500">45% (246 members)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Elite</span>
                <span className="text-sm text-gray-500">20% (110 members)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-800 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <Link to="/admin/memberships" className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Memberships
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Recent Members */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold">New Members</h2>
            <span className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full">+8 this week</span>
          </div>
          <div className="divide-y divide-gray-100">
            {recentMembers.map((member) => (
              <div key={member.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-gray-500">Joined {member.date}</p>
                  </div>
                  <span className={`text-xs py-1 px-2 rounded-full ${
                    member.plan === 'Basic' 
                      ? 'bg-gray-100 text-gray-800' 
                      : member.plan === 'Pro'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                  }`}>
                    {member.plan}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center border-t border-gray-100">
            <Link to="/admin/users" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Members
            </Link>
          </div>
        </div>

        {/* Popular Classes */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold">Popular Classes</h2>
            <span className="bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">By Attendance</span>
          </div>
          <div className="divide-y divide-gray-100">
            {popularClasses.map((cls) => (
              <div key={cls.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Calendar className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="text-sm font-medium">{cls.name}</p>
                    <p className="text-xs text-gray-500">Instructor: {cls.instructor}</p>
                  </div>
                  <span className="text-sm font-medium">{cls.attendance}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center border-t border-gray-100">
            <Link to="/admin/classes" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Classes
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <UserPlus className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">New member registered</span> - Jennifer Adams
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <Calendar className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">New class added</span> - Boxing Fundamentals
                  </p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  <CreditCard className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Membership upgraded</span> - Michael Torres
                  </p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <Users className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Class at capacity</span> - HIIT Cardio (Monday 7PM)
                  </p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <p className="font-medium">Yoga Flow</p>
                <p className="text-xs text-gray-500">6:00 AM - 7:00 AM • Studio 2</p>
              </div>
              <div className="text-sm text-gray-700">
                12/15 <span className="text-xs text-gray-500">attendees</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <p className="font-medium">Strength Training</p>
                <p className="text-xs text-gray-500">8:00 AM - 9:00 AM • Main Floor</p>
              </div>
              <div className="text-sm text-gray-700">
                18/20 <span className="text-xs text-gray-500">attendees</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <p className="font-medium">Spin Cycle</p>
                <p className="text-xs text-gray-500">5:30 PM - 6:30 PM • Cycling Room</p>
              </div>
              <div className="text-sm text-gray-700">
                22/25 <span className="text-xs text-gray-500">attendees</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <p className="font-medium">HIIT Cardio</p>
                <p className="text-xs text-gray-500">7:00 PM - 8:00 PM • Main Floor</p>
              </div>
              <div className="text-sm text-orange-600 font-medium">
                Full <span className="text-xs text-gray-500">18/18</span>
              </div>
            </div>
          </div>
          <Link to="/admin/classes" className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mt-4">
            View Full Schedule
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;