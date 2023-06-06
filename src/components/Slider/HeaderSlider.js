import React from "react";
import Slider from "react-slick";
import sliderImage1 from "../../assets/images/slider_img_1.jpg";
import sliderImage2 from "../../assets/images/slider_img_2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HeaderSlider.css";

function HeaderSlider() {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-hidden">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={sliderImage1} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImage2} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;
