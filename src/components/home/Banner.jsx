import React from 'react'
import Carousel from "react-multi-carousel";
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';


import img01 from '../../assests/Images/flip01.webp';
import img02 from '../../assests/Images/flipo2.webp';
import img03 from '../../assests/Images/flip03.webp';
import img04 from '../../assests/Images/flip04.webp';
import img05 from '../../assests/Images/flip05.webp';
import img06 from '../../assests/Images/flip06.webp';

const WrapperImg = styled('img')`
height:250px;
width:100vw;
`


const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};





const Banner = () => {
  return (
    <>
          <Carousel 
              swipeable={false}
              draggable={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              showDots={false}
              slidesToSlide={1}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"       
          >
              {/* <div><WrapperImg src={img01} alt="" /></div>
              <div><WrapperImg src={img02} alt="" /></div>
              <div><WrapperImg src={img03} alt="" /></div>
              <div><WrapperImg src={img04} alt="" /></div>
              <div><WrapperImg src={img05} alt="" /></div>
              <div><WrapperImg src={img06} alt="" /></div> */}
              {bannerData.map((item) => (
                  <div key={item.id}>
                      <WrapperImg src={item.url} alt="" />
                  </div>
              ))}
         </Carousel>

    </>
  )
}

export default Banner