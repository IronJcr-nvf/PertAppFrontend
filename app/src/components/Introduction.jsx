import React from 'react';
import '../assets/styles/introduction.css';
import welcomeImage from '../assets/images/welcome_image.png'; // تأكد من إضافة الصورة في المجلد الصحيح

const Introduction = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <h1>Welcome to Our App!</h1>
        <p>
          We're excited to have you here! Our app offers the best solutions to manage your projects
          and boost your productivity. Get started today and see the difference!
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="welcome-image">
        <img src={welcomeImage} alt="Welcome" />
      </div>
    </section>
  );
};

export default Introduction;
