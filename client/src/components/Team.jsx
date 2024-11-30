import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cpplus, godrej, zicom, Hikvision } from '../images';

const companies = [
  {
    name: 'CP Plus',
    position: 'Leading CCTV Brand',
    image: cpplus, // Replace with actual CP Plus image
    description: 'Affordable and durable CCTV solutions trusted across India.',
  },
  {
    name: 'Hikvision',
    position: 'AI-Powered Security',
    image: Hikvision, // Replace with actual Hikvision image
    description:
      'Advanced surveillance with AI technology and thermal cameras.',
  },
  {
    name: 'Godrej Security',
    position: 'Trusted Indian Brand',
    image: godrej, // Replace with actual Godrej Security image
    description: 'Innovative solutions for both home and enterprise security.',
  },
  {
    name: 'Zicom',
    position: 'Pioneering Security',
    image: zicom, // Replace with actual Zicom image
    description: 'IoT-enabled surveillance with real-time monitoring.',
  },
];

const CompaniesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 px-4 md:px-20 bg-gray-900">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">
        Meet Our Partnering Companies
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800 rounded-lg shadow-lg text-center flex flex-col max-w-xs mx-auto">
                <div className="flex flex-1">
                  <div className="w-1/2 bg-white text-gray-900 flex flex-col items-center justify-center p-4 rounded-l-lg">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                    />
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                  </div>
                  <div className="w-1/2 bg-gray-800 text-white p-4 rounded-r-lg flex flex-col justify-between">
                    <h4 className="text-md font-semibold">
                      {company.position}
                    </h4>
                    <p className="text-gray-400 mb-4">{company.description}</p>
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesSlider;
