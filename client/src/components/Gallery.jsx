import React from 'react';
import { websocket, person, Alerts } from '../images';

const features = [
  {
    title: 'Real-Time Alerts',
    description:
      'Get instant alerts and notifications when motion is detected, keeping you informed in real-time.',
    image: Alerts,
  },
  {
    title: 'Owner Image Recognition',
    description:
      "Advanced AI system recognizes the owner's image to minimize false alarms and enhance accuracy.",
    image: person,
  },
  {
    title: 'Customizable Controls',
    description:
      'Easily enable or disable the system through the app, providing full flexibility and control.',
    image: 'https://via.placeholder.com/80?text=Controls',
  },
  {
    title: 'WebSocket Integration',
    description:
      'Low-latency real-time communication for faster response and reliable security alerts.',
    image: websocket,
  },
  {
    title: 'Comprehensive Dashboard',
    description:
      'Monitor your security system in a single dashboard with an intuitive interface.',
    image: 'https://via.placeholder.com/80?text=Dashboard',
  },
];

const FeaturesPage = () => {
  return (
    <div className="py-10 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Features</h2>\
      <p className="text-3xl font-bold text-white mb-8 text-center">
        Discover the powerful features of our security system.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-20 h-20 rounded-md bg-gray-200 mb-4"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
