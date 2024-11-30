import React from 'react';

const PricingPage = () => {
  const pricingPlans = [
    {
      title: 'Basic Plan',
      price: '₹100',
      tokens: '50 Tokens',
      features: [
        'Access to basic features',
        'Token-based usage',
        'One-time purchase',
      ],
      bgColor: 'bg-blue-50', // Light blue background
    },
    {
      title: 'Standard Plan',
      price: '₹500',
      tokens: '250 Tokens',
      features: [
        'Access to all standard features',
        'Higher token limits',
        'Priority support',
      ],
      bgColor: 'bg-green-50', // Light green background
    },
    {
      title: 'Premium Plan',
      price: '₹1500',
      tokens: '500 Tokens',
      features: [
        'Access to all features',
        'Maximum token limits',
        'Premium support',
      ],
      bgColor: 'bg-yellow-50', // Light yellow background
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">
        Choose Your Plan
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.bgColor} border border-gray-200 rounded-lg shadow-lg p-8 w-80 transform transition-transform hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {plan.title}
            </h2>
            <p className="text-4xl font-bold text-gray-800 mb-2">
              {plan.price}
            </p>
            <p className="text-lg text-gray-600 mb-6">{plan.tokens}</p>
            <ul className="text-left mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 text-base mb-2">
                  - {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white rounded-md px-6 py-3 font-medium hover:bg-blue-800 transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
