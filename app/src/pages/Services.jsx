import React from 'react';
import '../assets/styles/Services.css';
//import ServicesImage from '../assets/images/welcome_image.png'; 
import Card from '../components/Cards';

const Services = () => {
  return (
    <>
    
    <div className="services" id='services'>
        <h1 className="services-title">Services</h1>
        <p className="services-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel facilisis ligula. <br></br>Sed vel faucibus libero. Nulla facilisi. Sed vel massa metus. Duis vel massa non dolor ornare iaculis.
        </p>
     <Card/>
    </div>
    
    
    </>
  );
};

export default Services;
