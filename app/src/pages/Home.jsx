import React from 'react';
import '../assets/styles/Home.css'; 
import Header from '../components/Header';
import Introduction from'../components/Introduction';
import About from'./About';
import Slider from '../components/3DSlider';
import Services from'./Services';
import Footer from '../components/Footer';
import SnakeCursor from '../components/3DSnakeCursor';
const Home = () => {
  return (
    <>
     
     {/* Container for all elements in Home component */}
     {/* This is a class named home-container to control the layout and styling of all elements in Home component */}
     <div className="home-container" id='home'>
      <SnakeCursor/>
      <Header/>
      <Introduction/>
      <About/>
      <hr className="home-hr"/>  {/* This is a horizontal line */}
     <Slider/>
     <Services/>
     <Footer/>
    </div>
    </>
  );
};

export default Home;
