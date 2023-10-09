// import ReactImageGallery from "react-image-gallery";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
const Slider = () => {
    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height       : '80vh',
      };
     return(
<div className=''>
<Splide 
  options={ options }
aria-label="My Favorite Images">
  <SplideSlide>
    <img className='w-full h-full' src={"https://i.ibb.co/fH95C5G/photo-1578922864601-79dcc7cbcea9.jpg"} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={  "https://i.ibb.co/0QTJrs0/91125-funny-wedding-wishes-for-best-friend-for-their-d-day-gautam-khullar-lead.jpg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={ "https://i.ibb.co/GQsQtwF/senior-woman-receives-a-present-presented-at-her-birthday-party-at-the-retirement-home-PMJP4-Y.jpg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={ "https://i.ibb.co/XXHg0vG/photo-1505236858219-8359eb29e329.jpg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={"https://i.ibb.co/JB1p5Xd/photo-1631857455684-a54a2f03665f.jpg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className='w-full h-full' src={"https://i.ibb.co/bdDLY1J/baby-shower-games-printables-the-everymom-f-h.png"} alt="Image 2"/>
  </SplideSlide>
</Splide>
</div>

     )   
  
};

export default Slider;