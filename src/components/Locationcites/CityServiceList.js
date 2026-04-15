// Locationcites/CityDetailPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import cityData from "./citymain.json"; 
import "./CityStyle.css"; // CSS import karenge wireframe jaisa dikhane ke liye

export default function CityDetailPage() {
  // URL se city ka id nikal rahe hain (e.g., 'ahmedabad')
  const { cityId } = useParams();
  
  // JSON me se us city ka data dhoondh rahe hain
  const currentCity = cityData.find(city => city.id === cityId);

  // Agar koi galat URL daal de
  if (!currentCity) {
    return <h2>City not found!</h2>;
  }

  return (
    <div className="city-page-wrapper">
      
      {/* Yeh aapka bada Rounded Box hai (Wireframe wala) */}
      <div className="wireframe-rounded-box">
        <h2 className="box-title">{currentCity.cityName} Service List</h2>
        
        <div className="services-container">
          {/* Yahan services list ho rahi hain */}
          {currentCity.services.map((service, index) => (
            
            <Link 
              key={index} 
              to={`/location/${currentCity.id}/${service.id}`} 
              className="service-row-link"
            >
              <div className="service-row-box">
                {service.name}
              </div>
            </Link>
            
          ))}
        </div>
      </div>

    </div>
  );
}