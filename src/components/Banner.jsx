import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';


import stat_icon1 from "../assets/icons/collaboration.png"
import stat_icon2 from "../assets/icons/review.png"
import stat_icon3 from "../assets/icons/layers.png"



function Banner() {
  const slidesData = [
    {
      title: "Innovative Technology Solutions",
      description: "Experience innovation with TacTics Soft, where strategic thinking meets software expertise. Our solutions empower efficiency, making your work both easier and more productive.",
    },
    {
      title: "Transform Your Vision",
      description: "At TacTics Soft, we turn your ideas into reality with tailored web and app development services. From sleek designs to seamless functionality, we craft solutions that bring your vision to life.",
    },
    {
      title: "Empower Your Business",
      description: "With custom digital solutions, TacTics Soft helps you stay ahead in a competitive world. Unlock new possibilities, streamline operations, and achieve your goals with our cutting-edge technology expertise.",
    },

    
  ];

  return (
    <div className="banner">
      <div className="autoContent">
        <div className="banner_inner"> 
          <div className="banner_slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="banner_swiper"
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="banner_slide_content">
                    <h1 className="banner_title">{slide.title}</h1>
                    <p className="banner_desc">{slide.description}</p>
                    <div className="banner_btns">
                      <a href="#request-quote" className="all_btn">Get a Quote</a>
                      <Link to="/contact" className="all_btn btn_outline">Contact Us</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
           
          <div className="banner_footer">
            <div className="banner_footer_list">
              
              <div className="banner_footer_li bg_cyan" data-aos="fade-up">
                <div className="stat_icon">
                  <img src={stat_icon1} alt="Collaboration Icon" /> 
                </div>
                <div className="stat_info">
                  <span>Years of Experience</span>
                  <h3>5+</h3>
                </div>
              </div>

              <div className="banner_footer_li bg_black" data-aos="fade-up">
                <div className="stat_icon">
                  <img src={stat_icon2} alt="Review Icon" /> 
                </div>
                <div className="stat_info">
                  <span>Satisfied Clients</span>
                  <h3>500+</h3>
                </div>
              </div>

              <div className="banner_footer_li bg_cyan" data-aos="fade-up">
                <div className="stat_icon">
                  <img src={stat_icon3} alt="Layers Icon" /> 
                </div>
                <div className="stat_info">
                  <span>Completed Projects</span>
                  <h3>1,000+</h3>
                </div>
              </div>

            </div>
          </div> 

        </div>
      </div> 
    </div>
  );
}

export default Banner;