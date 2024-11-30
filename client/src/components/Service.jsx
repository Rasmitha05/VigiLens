import React from 'react';
import { FaCamera, FaBell, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Real-Time Motion Detection',
    description:
      'Detects any movement in your home or premises and sends instant alerts to your phone.',
    icon: <FaCamera className="text-4xl text-blue-500" />,
  },
  {
    title: 'Instant Alerts & Notifications',
    description:
      'Receive notifications when an unknown person is detected, keeping you informed at all times.',
    icon: <FaBell className="text-4xl text-orange-500" />,
  },
  {
    title: 'Enhanced Security',
    description:
      'Our AI-powered system helps differentiate between owners and intruders to avoid false alarms.',
    icon: <FaShieldAlt className="text-4xl text-green-500" />,
  },
];

const Service = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Our Security Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
