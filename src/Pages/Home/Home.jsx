/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from '../../COMPONENTS/Slider/Slider';
import Title from '../../COMPONENTS/title/Title';
import Categories from '../../COMPONENTS/catagoury/categories';
import Footer from '../../COMPONENTS/Footer';
import Navbar from '../../COMPONENTS/Navbar/Navbar';

const Home = () => {
    return (
        <div >
          <Navbar></Navbar>
         <div>  <Slider></Slider> </div>
           <Title></Title>
           <Categories></Categories>
           <Footer></Footer>
        </div>
    );
};

export default Home;