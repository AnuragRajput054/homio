import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ServiceDetails = () => {
  const { serviceType } = useParams();
  const [serviceData, setServiceData] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [loadingMap, setLoadingMap] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDkeHk9VvpXCQTEFIzFfBAL-I6nPd6f10k", 
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => console.error("Location access denied", err)
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/admin/services/${serviceType}`
        );
        let data = res.data;

        if (userLocation) {
          data = data.map((item) => {
            const distance = getDistanceFromLatLonInKm(
              userLocation.lat,
              userLocation.lng,
              item.latitude,
              item.longitude
            );
            return { ...item, distance };
          });

          data.sort((a, b) => a.distance - b.distance);
        }

        setServiceData(data);
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      }
    };

    fetchData();
  }, [serviceType, userLocation]);

  const handleShowDirection = (lat, lng) => {
    if (!userLocation || !isLoaded) return;

    setLoadingMap(true);
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: userLocation,
        destination: { lat, lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          setIsMapOpen(true);
        } else {
          console.error("Directions error:", status);
        }
        setLoadingMap(false);
      }
    );
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const deg2rad = (deg) => deg * (Math.PI / 180);
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-[90%] md:w-[80%] mb-10">
        <h1 className="text-4xl font-bold mb-10 text-center capitalize">
          {serviceType} Services Near You
        </h1>

        {serviceData.length === 0 ? (
          <p className="text-center text-lg">No services found for {serviceType}</p>
        ) : (
          <div className="space-y-8">
            {serviceData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between"
              >
                <div className="w-full md:w-2/3 space-y-2">
                  <h2 className="text-2xl font-semibold">
                    {item.firstName} {item.lastName}
                  </h2>
                  <div className="text-gray-700 space-y-1 text-sm md:text-base">
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Phone:</strong> {item.contactNumber}</p>
                    <p><strong>Service:</strong> {item.service},{item.serviceName}</p>
                    <p><strong>Location:</strong> {item.location}, {item.city} - {item.pincode}</p>
                    {/* {item.distance && (
                      <p><strong>Distance:</strong> {item.distance.toFixed(2)} km</p>
                    )} */}
                    {item.latitude && item.longitude && isLoaded && (
                      <button
                        onClick={() =>
                          handleShowDirection(item.latitude, item.longitude)
                        }
                        className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl"
                      >
                        {loadingMap ? "Loading..." : "Show Directions"}
                      </button>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-end">
                  <img
                    src={`data:image/png;base64,${item.image}`}
                    alt={`${item.firstName} ${item.lastName}`}
                    className="w-60 h-44 object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog
        open={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-4xl overflow-hidden relative">
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {isLoaded && directions && (
              <div className="w-full h-[500px]">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={userLocation}
                  zoom={12}
                >
                  <DirectionsRenderer directions={directions} />
                </GoogleMap>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ServiceDetails;
