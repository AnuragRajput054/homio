import React from 'react';
import { useNavigate } from 'react-router-dom';
const services = [
  {
    name: 'Hostel',
    description: 'Find the best hostels with affordable rent and friendly environments.',
    imageUrl: 'https://www.hostelworld.com/blog/wp-content/uploads/2018/09/hostel-room-types-5.jpg'
  },
  {
    name: 'Mess',
    description: 'Delicious home-cooked food at your nearest mess with flexible plans.',
    imageUrl: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/06/20190419/South-Indian-meals1.jpg'
  },
  {
    name: 'Hotels',
    description: 'Book top-rated hotels for comfortable stays in your city.',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fb/a7/31/effotel-by-sayaji-indore.jpg?w=1200&h=-1&s=1'
  },
  {
    name: 'Hospitals',
    description: 'Locate the best healthcare services and emergency rooms near you.',
    imageUrl: 'https://www.who.int/images/default-source/wpro/health-topic/hospitals/f8-11102016-my-6042.tmb-1024v.jpg?Culture=en&sfvrsn=57e1f33d_4'
  },
  {
    name: 'Barber',
    description: 'Get your grooming needs met by professional barbers in town.',
    imageUrl: 'https://img.freepik.com/premium-photo/man-getting-his-hair-cut-barbar_1124848-26968.jpg'
  },
  {
    name: 'Grocery',
    description: 'Find grocery stores with fresh produce and household essentials.',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/1183012322/Grocery-store/960x0.jpg?format=jpg&width=960'
  },
  {
    name: 'Electrician',
    description: 'Reliable electricians for all your electrical installation and repair needs.',
    imageUrl: 'https://scitexas.edu/wp-content/uploads/2022/10/Electrician-Featured.jpg'
  },
  {
    name: 'Plumber',
    description: 'Professional plumbers for fast and reliable repairs.',
    imageUrl: 'https://www.pocketprep.com/wp-content/uploads/2022/09/0922_JourneymanPlumber_thumbnail.png'
  },
  {
    name: 'Stationary',
    description: 'Get all your school, college, or office supplies here.',
    imageUrl: 'https://i.pinimg.com/736x/22/62/64/22626491f5d6e16203924f4c1914a606.jpg'
  },
];

const ServiceCard = () => {
  const nevigate = useNavigate();
  const detail = () =>{
        nevigate('/browse');
  }
  return (
    <div className="container my-10 mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full h-3/5 object-cover"
              onClick={detail}
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
              <p className="mt-3 text-gray-600 text-sm">{service.description}</p>
              <button className="mt-4 text-blue-500 hover:underline">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
