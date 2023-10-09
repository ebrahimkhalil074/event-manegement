/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Slider from '../../COMPONENTS/Slider/Slider';
import Title from '../../COMPONENTS/title/Title';
import Categories from '../../COMPONENTS/catagoury/categories';
import Footer from '../../COMPONENTS/Footer';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import ChooseEvent from '../../COMPONENTS/ChooseEvent';
import RecentEvent from '../../COMPONENTS/RecentEvent';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
useEffect(()=>{
  AOS.init({duration:"2000",delay:'0500'});

},[])

    return (
        <div >
         <div data-aos="fade-down"
         data-aos-anchor-placement="top-center"
         >
         <Navbar></Navbar>
         </div>
         <div data-aos="fade-up" data-aos-anchor-placement="top-center">
         <Slider></Slider> 
         </div>
         <div data-aos="fade-up" data-aos-anchor-placement="top-center">
         <Title title={'OUR ALL SERVICES'}></Title>
         </div>
         <div data-aos="fade-down" data-aos-anchor-placement="top-center">
         <Categories></Categories>
         </div>
         <div data-aos="fade-up" data-aos-anchor-placement="top-center">
         <ChooseEvent></ChooseEvent>
         </div>
         <div data-aos="fade-down" data-aos-anchor-placement="top-center">
         <RecentEvent></RecentEvent>
         </div>
         <div data-aos="fade-down" data-aos-anchor-placement="top-center">
         <Footer></Footer>
         </div>
         
        </div>
    );
};

export default Home;