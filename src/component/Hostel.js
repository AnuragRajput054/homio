import React, { useState, useEffect } from "react";
import axios from "axios";

const HostelsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
       fetchData();
  });
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.justdial.com/functions/isBExists.php?city=Indore&ncatid=10253730&pincode=452001&area=&mobile=&wap=77&source=77&cname=Hostels&abbr=0"
      );
      setData(response.data); // Assuming the API returns JSON data
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Hostels in Indore</h1>
      <ul>
        {data.map((hostel, index) => (
          <li key={index}>
            <h2>{hostel.name}</h2>
            <p>Address: {hostel.address}</p>
            <p>Contact: {hostel.phone || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostelsList;
