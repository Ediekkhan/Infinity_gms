import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Check, X, Calendar, CreditCard, Award, ChevronDown } from 'lucide-react';

// Mock data for membership plans
const membershipPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for beginners',
    features: [
      { included: true, text: 'Gym access (6 AM - 10 PM)' },
      { included: true, text: 'Basic fitness assessment' },
      { included: true, text: '2 group classes per week' },
      { included: false, text: 'Personal training sessions' },
      { included: false, text: 'Nutrition consultation' },
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: 59,
    period: 'month',
    description: 'For dedicated fitness enthusiasts',
    features: [
      { included: true, text: '24/7 gym access' },
      { included: true, text: 'Advanced fitness assessment' },
      { included: true, text: 'Unlimited group classes' },
      { included: true, text: '2 personal training sessions/month' },
      { included: false, text: 'Nutrition consultation' },
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    period: 'month',
    description: 'The complete fitness experience',
    features: [
      { included: true, text: '24/7 gym access' },
      { included: true, text: 'Complete fitness assessment' },
      { included: true, text: 'Unlimited group classes' },
      { included: true, text: '4 personal training sessions/month' },
      { included: true, text: 'Monthly nutrition consultation' },
    ],
    popular: false,
  },
];

// FAQ data
const faqData = [
  {
    question: 'Can I cancel my membership at any time?',
    answer: 'Yes, you can cancel your membership at any time. However, we require a 30-day notice for cancellations. Any unused personal training sessions or services will remain available until the end of your billing cycle.',
  },
  {
    question: 'Are there any signup or cancellation fees?',
    answer: 'There is a one-time sign-up fee of $25 for new members. There are no cancellation fees when you provide the required 30-day notice before cancellation.',
  },
  {
    question: 'Can I freeze my membership temporarily?',
    answer: 'Yes, members can freeze their membership for up to 3 months per year. A reduced monthly fee of $10 applies during the freeze period. This feature is available for members who have been active for at least 3 months.',
  },
  {
    question: 'Do you offer family or couple discounts?',
    answer: 'Yes, we offer a 10% discount on all additional family memberships when at least two members from the same household join. Both members must provide proof of residence.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, as well as direct bank transfers for monthly payments. We currently do not accept cash payments for memberships.',
  },
  {
    question: 'Can I upgrade or downgrade my membership plan?',
    answer: 'Yes, you can upgrade your membership at any time, and the new rate will be prorated for the current billing cycle. Downgrades can be processed to take effect at the start of the next billing cycle.',
  },
];

const MembershipPlans: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-28 md:py-32">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Membership Plan</h1>
        <p className="text-gray-600 text-lg">
          We offer flexible plans to meet your fitness needs. Choose the one that fits your lifestyle and budget.
        </p>
      </div>

      {/* Billing Period Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium ${
              billingPeriod === 'month'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => setBillingPeriod('month')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium ${
              billingPeriod === 'year'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => setBillingPeriod('year')}
          >
            Yearly
            <span className="ml-1 text-xs py-0.5 px-2 bg-green-100 text-green-800 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className={`card hover:shadow-xl transition-shadow relative ${
              plan.popular ? 'border-2 border-blue-600' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold mb-1">
                ${billingPeriod === 'year' ? Math.round(plan.price * 0.8 * 12) : plan.price}
                <span className="text-lg text-gray-500">
                  {billingPeriod === 'year' ? '/year' : '/mo'}
                </span>
              </div>
              {billingPeriod === 'year' && (
                <div className="text-green-600 text-sm mb-4">Save ${Math.round(plan.price * 12 * 0.2)} per year</div>
              )}
              {billingPeriod === 'month' && <div className="mb-4"></div>}
              <ul className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-gray-400'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={isAuthenticated ? '/user/membership' : '/register'}
                className={`btn w-full ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {isAuthenticated ? 'Choose Plan' : 'Sign Up Now'}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">All Memberships Include</h2>
          <p className="text-gray-600">
            Beyond the plan-specific features, all our members enjoy these premium benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold mb-2">No Long-Term Contracts</h3>
              <p className="text-gray-600">
                Enjoy month-to-month flexibility with no long-term commitment required.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Flexible Payment Options</h3>
              <p className="text-gray-600">
                Choose from multiple payment methods and billing cycles that work for you.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Member Rewards Program</h3>
              <p className="text-gray-600">
                Earn points for check-ins and class attendance, redeemable for gym merchandise and services.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-lg mr-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Bring-a-Friend Passes</h3>
              <p className="text-gray-600">
                Receive 2 guest passes per month to share your fitness journey with friends and family.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Access to Fitness App</h3>
              <p className="text-gray-600">
                Track workouts, book classes, and monitor your progress with our exclusive mobile app.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Monthly Fitness Challenges</h3>
              <p className="text-gray-600">
                Participate in our monthly fitness challenges with prizes for top performers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    expandedFaq === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ${
                  expandedFaq === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Sign up today and get your first month at a 10% discount. Plus, no sign-up fee for new members who join this month!
        </p>
        <Link
          to={isAuthenticated ? '/user/membership' : '/register'}
          className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold"
        >
          {isAuthenticated ? 'Choose Your Plan' : 'Sign Up Now'}
        </Link>
      </div>
    </div>
  );
};

export default MembershipPlans;