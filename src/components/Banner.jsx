import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../src/assets/banner.jpg";

const Banner = () => {
  const [activeDot, setActiveDot] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (_, next) => setActiveDot(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "150px",
        }}
      >
        <ul style={{ margin: 0 }}>
          {dots.map((item, index) => (
            <li
              key={index}
              style={{
                display: "block",
                marginTop: "10px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === activeDot
            ? {
                width: "30px",
                borderRight: "3px #262626 solid",
                padding: "10px 30px 0 0",
                fontFamily: "DM Sans",
                fontSize: "14px",
                color: "#262626",
              }
            : {
                width: "30px",
                borderRight: "3px white solid",
                padding: "10px 30px 0 0",
                fontFamily: "DM Sans",
                fontSize: "14px",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };

return (
    <div className="relative overflow-hidden w-full">
      <Slider {...settings}>
        <div>
            <img className='w-full' src={banner} alt="banner" />
        </div>
        <div>
            <img className='w-full' src={banner} alt="banner" />
        </div>
        <div>
            <img className='w-full' src={banner} alt="banner" />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
