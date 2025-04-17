import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    service: "",
    serviceName: "",
    city: "",
    location: "",
    pincode: "",
    image: null,
    mobileNumber: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const updatedFormData = {
          ...formData,
          latitude: lat,
          longitude: lng,
        };

        const payload = new FormData();
        for (let key in updatedFormData) {
          payload.append(key, updatedFormData[key]);
        }

        try {
          const res = await axios.post(
            "http://localhost:8080/api/admin/submit",
            payload,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          alert(res.data);
          navigate("/");
        } catch (error) {
          console.log("error----", error);
          alert("Error uploading data");
        }
      },
      (error) => {
        alert("Please allow location access to register the service.");
        console.error("Geolocation error:", error);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#cce0ff] text-gray-800 font-[Poppins]">
      {/* <Header /> */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold mb-6 text-blue-700 animate-fade-in">
              Welcome to New Homio
            </h2>
            <p className="text-lg leading-relaxed tracking-wide text-gray-700">
              New Homio is a thoughtfully designed platform aimed at simplifying
              the process of relocating and settling into a new city. It
              connects users to essential resources like hostels, mess services,
              grocery shops, and more.
              <br />
              <br />
              With upcoming features like integrated payment gateways, we aim to
              be a one-stop solution for your relocation needs.
            </p>
          </div>

          <div className="bg-white p-8 mt-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-200 animate-slide-up">
            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">
              Admin: Register a Service Provider
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
            >
              <input
                type="text"
                name="firstName"
                className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="col-span-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="col-span-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                onChange={handleChange}
              />

              <input
                type="text"
                name="mobileNumber"
                className="col-span-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Contact Number"
                onChange={handleChange}
              />

              <div className="col-span-2">
                <select
                  name="service"
                  className="w-full p-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value=""> Choose a Service </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Mess">Mess</option>
                  <option value="Hotels">Hotels</option>
                  <option value="Hospitals">Hospitals</option>
                  <option value="Barber">Barber</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Stationary">Stationary</option>
                </select>
              </div>

              <input
                type="text"
                name="serviceName"
                className="col-span-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Please Enter Name of your Service"
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="City"
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Exact Location"
                onChange={handleChange}
              />
              <input
                type="text"
                name="pincode"
                className="col-span-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Pincode"
                onChange={handleChange}
              />
              <input
                type="file"
                name="image"
                className="col-span-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="col-span-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-8 ml-4 animate-slide-in-right">
          {[
            "https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/1200px-Indore_Rajwada01.jpg",
            "https://media.istockphoto.com/id/1283363191/photo/views-of-slums-on-the-shores-of-mumbai-india-against-the-backdrop-of-skyscrapers-under.jpg?s=612x612&w=0&k=20&c=vtj11JIJtkO2XGLZX1PdsQhy3kFfTwz3Z5H-THc0ScU=",
            "https://images.squarespace-cdn.com/content/v1/61085dcb35f7242682cd3122/ad95e52f-33bb-40a8-a82b-316155a019ab/m+g+road+and++holkarstedium++01a_credit_raju+pawar.jpg",
          ].map((src, index) => (
            <img
              key={index}
              className="rounded-2xl shadow-xl object-cover w-full h-60 hover:scale-105 transition-transform duration-300"
              src={src}
              alt={`homio-img${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
