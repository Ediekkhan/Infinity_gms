import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, MapPin, Phone, Mail, Shield, Users, Heart, BarChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24 md:py-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/4162584/pexels-photo-4162584.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            opacity: "0.2" 
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About FitFlex Gym Management
            </h1>
            <p className="text-xl opacity-90 mb-8">
              We're passionate about fitness and dedicated to helping gyms and fitness centers operate at their best. Learn about our mission, our team, and why we're the perfect partner for your fitness business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Our Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                FitFlex was founded in 2020 by a team of fitness enthusiasts and software developers who recognized the need for better management solutions in the fitness industry. After experiencing the frustrations of outdated gym management systems firsthand, we set out to create a more intuitive, comprehensive platform.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a simple class booking system has evolved into a complete gym management solution used by fitness centers across the country. Our team combines expertise in fitness operations with cutting-edge technology to deliver a system that truly meets the needs of modern gyms.
              </p>
              <p className="text-gray-600">
                Today, we're proud to help fitness businesses streamline their operations, increase member satisfaction, and grow their communities. Our mission is to make gym management simpler, so you can focus on what matters most: helping your members achieve their fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-gray-600">
                We believe that fitness is about community. Our platform is designed to foster connections and make gym management more personal and engaging.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven Growth</h3>
              <p className="text-gray-600">
                We help gym owners make informed decisions through actionable insights and analytics that drive business growth and member satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability & Security</h3>
              <p className="text-gray-600">
                We understand the importance of protecting member data and ensuring our system is available when you need it most.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
              <p className="text-gray-600">
                We're committed to providing exceptional support and continuously improving our platform based on customer feedback.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion for Fitness</h3>
              <p className="text-gray-600">
                Our team is passionate about fitness and wellness. We understand the industry because we're part of it.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
              <p className="text-gray-600">
                We're always evolving our platform to meet the changing needs of fitness businesses and their members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FitFlex</h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive gym management system is designed to streamline operations and enhance the member experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Easy-to-Use Interface</h3>
                    <p className="text-gray-600">
                      Our intuitive platform requires minimal training, allowing your staff to get up to speed quickly and focus on serving members.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Member Engagement Tools</h3>
                    <p className="text-gray-600">
                      From class booking to progress tracking, our system helps keep your members motivated and connected to your gym community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Analytics</h3>
                    <p className="text-gray-600">
                      Gain valuable insights into membership trends, class attendance, and revenue to make data-driven business decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="FitFlex Dashboard" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-md">
                <p className="font-bold">Trusted by 500+ fitness businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Don't take our word for it. Here's what gym owners and managers have to say about FitFlex.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-bold">John Davis</div>
                  <div className="text-sm text-gray-500">Owner, FitZone Gym</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "FitFlex has transformed the way we manage our gym. The class booking system is intuitive for both staff and members, and the reporting features give me the insights I need to grow my business."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-bold">Rachel Kim</div>
                  <div className="text-sm text-gray-500">Manager, Elite Fitness</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our members love being able to book classes and track their progress through the app. As a manager, I appreciate how easy it is to handle membership renewals and communicate with our community."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-bold">Michael Wilson</div>
                  <div className="text-sm text-gray-500">Director, PowerHouse Gym</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We switched to FitFlex after trying several other gym management systems. The difference in customer support alone has been worth it, but the platform itself is also more reliable and feature-rich."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about FitFlex? Our team is here to help you find the right solution for your fitness business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      123 Fitness Street, Suite 100<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@fitflex.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-md mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <form className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-input"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Gym Management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful gym owners who trust FitFlex to streamline their operations and enhance the member experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
              Get Started Today
            </Link>
            <Link to="/classes" className="btn border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-bold transition-colors">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;