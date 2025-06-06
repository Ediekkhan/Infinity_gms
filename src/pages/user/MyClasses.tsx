import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Filter, Search, CheckCircle, XCircle } from 'lucide-react';

const MyClasses: React.FC = () => {
  // Mock data for booked classes
  const bookedClasses = [
    {
      id: 1,
      title: 'Strength Training',
      instructor: 'Alex Peterson',
      time: '6:00 AM - 7:00 AM',
      days: ['Monday', 'Wednesday', 'Friday'],
      location: 'Main Gym - Weight Room',
      status: 'upcoming',
      nextClass: '2025-03-15T06:00:00',
    },
    {
      id: 2,
      title: 'Yoga Flow',
      instructor: 'Maya Rodriguez',
      time: '5:30 PM - 6:30 PM',
      days: ['Tuesday', 'Thursday'],
      location: 'Studio 2 - Mind & Body Room',
      status: 'upcoming',
      nextClass: '2025-03-14T17:30:00',
    },
    {
      id: 3,
      title: 'HIIT Cardio',
      instructor: 'James Wilson',
      time: '7:00 PM - 8:00 PM',
      days: ['Monday', 'Wednesday', 'Friday'],
      location: 'Main Gym - Activity Area',
      status: 'completed',
      lastAttended: '2025-03-10T19:00:00',
    },
  ];

  // Mock data for class history
  const classHistory = [
    {
      date: '2025-03-10',
      className: 'HIIT Cardio',
      instructor: 'James Wilson',
      status: 'attended',
    },
    {
      date: '2025-03-08',
      className: 'Strength Training',
      instructor: 'Alex Peterson',
      status: 'attended',
    },
    {
      date: '2025-03-07',
      className: 'Yoga Flow',
      instructor: 'Maya Rodriguez',
      status: 'missed',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Classes</h1>
        <p className="text-gray-600">Manage your booked classes and view your class history</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="form-input pl-10 w-full"
              placeholder="Search classes"
            />
          </div>
          <div className="flex gap-4">
            <select className="form-input">
              <option>All Classes</option>
              <option>Upcoming</option>
              <option>Completed</option>
            </select>
            <button className="btn btn-secondary flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Upcoming Classes</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {bookedClasses.filter(cls => cls.status === 'upcoming').map((cls) => (
            <div key={cls.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cls.title}</h3>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>Instructor: {cls.instructor}</p>
                      <p>Days: {cls.days.join(', ')}</p>
                      <p>Time: {cls.time}</p>
                      <p>Location: {cls.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                  <Link
                    to={`/classes/${cls.id}`}
                    className="btn btn-secondary mb-2 w-full md:w-auto"
                  >
                    View Details
                  </Link>
                  <button className="btn btn-primary w-full md:w-auto">
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class History */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Class History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
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
              {classHistory.map((record, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.className}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.instructor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      record.status === 'attended' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {record.status === 'attended' ? (
                        <CheckCircle className="h-4 w-4 mr-1" />
                      ) : (
                        <XCircle className="h-4 w-4 mr-1" />
                      )}
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 text-center">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center mx-auto">
            View Full History
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;