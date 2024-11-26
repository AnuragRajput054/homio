import React, { useEffect, useState } from 'react';
const HotelCard = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://cdn.cookielaw.org/consent/3ea94870-d4b1-483a-b1d2-faf1d982bb31/01919962-3d49-79ad-8ba1-b0a2e0776f1b/en-gb.json")
      .then(response => response.json())
      .then(data => {
        const hotelData = data.hotels.map(hotel => ({
          name: hotel.name,
          image: hotel.image, 
          location: hotel.location
        }));
        setHotels(hotelData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4">
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg m-4 p-6 w-64 transform hover:scale-105 transition-transform duration-300">
          <img src={hotel.image} alt={hotel.name} className="rounded-md h-40 w-full object-cover" />
          <h3 className="text-xl font-semibold mt-4">{hotel.name}</h3>
          <p className="text-gray-600">{hotel.location}</p>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
