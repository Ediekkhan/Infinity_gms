import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart, Calendar, CheckCircle, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            opacity: "0.3" 
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Join FitFlex and experience a new way to achieve your fitness goals with expert trainers and state-of-the-art equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                Start Your Journey
              </Link>
              <Link to="/classes" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-bold transition-colors">
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Classes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Classes</h2>
            <Link to="/classes" className="flex items-center text-blue-600 hover:text-blue-800">
              View All Classes <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Class Card 1 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Strength Training" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-3 rounded font-medium">
                  Popular
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Mon, Wed, Fri</span>
                  <Clock className="h-4 w-4 text-blue-600 ml-4 mr-2" />
                  <span className="text-sm text-gray-600">6:00 AM - 7:00 AM</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Strength Training</h3>
                <p className="text-gray-600 mb-4">Build muscle and increase your metabolism with our expert-led strength training class.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Intermediate
                  </span>
                  <Link 
                    to="/classes/1" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Class Card 2 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Yoga Flow" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Tue, Thu</span>
                  <Clock className="h-4 w-4 text-blue-600 ml-4 mr-2" />
                  <span className="text-sm text-gray-600">5:30 PM - 6:30 PM</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Yoga Flow</h3>
                <p className="text-gray-600 mb-4">Improve flexibility, balance, and mental clarity with our relaxing yoga flow sessions.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                    All Levels
                  </span>
                  <Link 
                    to="/classes/2" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Class Card 3 */}
            <div className="card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="HIIT Cardio" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 m-3 rounded font-medium">
                  New
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Mon, Wed, Fri</span>
                  <Clock className="h-4 w-4 text-blue-600 ml-4 mr-2" />
                  <span className="text-sm text-gray-600">7:00 PM - 8:00 PM</span>
                </div>
                <h3 className="text-xl font-bold mb-2">HIIT Cardio</h3>
                <p className="text-gray-600 mb-4">Maximize calorie burn and boost endurance with high-intensity interval training.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium bg-red-100 text-red-800 px-2 py-1 rounded">
                    Advanced
                  </span>
                  <Link 
                    to="/classes/3" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Membership Plan</h2>
            <p className="text-gray-600 text-lg">
              We offer flexible plans to meet your fitness needs. Choose the one that fits your lifestyle and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Basic</h3>
                <p className="text-gray-500 mb-4">Perfect for beginners</p>
                <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-500">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Gym access (6 AM - 10 PM)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic fitness assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>2 group classes per week</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="h-5 w-5 border border-gray-300 rounded-full mr-2"></span>
                    <span>Personal training sessions</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="h-5 w-5 border border-gray-300 rounded-full mr-2"></span>
                    <span>Nutrition consultation</span>
                  </li>
                </ul>
                <Link to="/memberships" className="btn btn-secondary w-full">
                  Choose Plan
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="card relative border-2 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Pro</h3>
                <p className="text-gray-500 mb-4">For dedicated fitness enthusiasts</p>
                <div className="text-4xl font-bold mb-4">$59<span className="text-lg text-gray-500">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 gym access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced fitness assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited group classes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>2 personal training sessions/month</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="h-5 w-5 border border-gray-300 rounded-full mr-2"></span>
                    <span>Nutrition consultation</span>
                  </li>
                </ul>
                <Link to="/memberships" className="btn btn-primary w-full">
                  Choose Plan
                </Link>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Elite</h3>
                <p className="text-gray-500 mb-4">The complete fitness experience</p>
                <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-500">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 gym access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Complete fitness assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited group classes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>4 personal training sessions/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Monthly nutrition consultation</span>
                  </li>
                </ul>
                <Link to="/memberships" className="btn btn-secondary w-full">
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-block p-4 rounded-full bg-white/10 mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-xl">Active Members</div>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 rounded-full bg-white/10 mb-4">
                <Calendar className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl">Weekly Classes</div>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 rounded-full bg-white/10 mb-4">
                <BarChart className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-xl">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600 text-lg">
              Don't take our word for it. Here's what our members have achieved with FitFlex.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Member for 2 years</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I've tried many gyms over the years, but FitFlex is different. The trainers actually care about your progress and the community is so supportive. I've lost 30 pounds and feel stronger than ever!"
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-bold">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">Member for 1 year</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The variety of classes at FitFlex keeps my routine fresh and exciting. The HIIT classes have dramatically improved my endurance, and the trainers always push me to do my best."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-bold">Jessica Kim</div>
                  <div className="text-sm text-gray-500">Member for 6 months</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a busy professional, I needed a gym with flexible hours and efficient workouts. FitFlex's 24/7 access and varied class schedule make it easy to stay consistent with my fitness goals."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join FitFlex today and transform your body with our expert trainers, state-of-the-art equipment, and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-bold">
              Sign Up Now
            </Link>
            <Link to="/classes" className="btn border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-bold transition-colors">
              Explore Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;