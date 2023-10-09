/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from '../../COMPONENTS/Slider/Slider';
import Title from '../../COMPONENTS/title/Title';
import Categories from '../../COMPONENTS/catagoury/categories';
import Footer from '../../COMPONENTS/Footer';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import ChooseEvent from '../../COMPONENTS/ChooseEvent';

const Home = () => {
    return (
        <div >
          <Navbar></Navbar>
         <div>  <Slider></Slider> </div>
           <Title></Title>
           <Categories></Categories>
           <ChooseEvent></ChooseEvent>
           <Footer></Footer>
        </div>
    );
};

export default Home;