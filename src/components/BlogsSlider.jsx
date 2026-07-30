import React, { useRef } from "react";
import { Link } from "react-router-dom";  
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

import blog_img1 from "../assets/images/blog_img1.png"
 
 

function BlogsSlider({ blogs = [] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
 
  const dummyBlogs = [
    {
      id: 1,
      image: blog_img1,
      category: "AI/ML",
      title: "AI Chatbot Development: Build Bots That Scale Your Business",
      link: "/blog",
      readTime: "5 MIN READ",
    },
    {
      id: 2,
      image: blog_img1,
      category: "IT",
      title: "Blog5",
      link: "/blog",
      readTime: "5 MIN READ",
    },
    {
      id: 3,
      image: blog_img1,
      category: "AI/ML",
      title: "AI Chatbot Development: Build Bots That Scale Your Business",
      link: "/blog",
      readTime: "5 MIN READ",
    },
    {
      id: 4,
      image: blog_img1,
      category: "Tech",
      title: "Future of Web Development in 2026",
      link: "/blog",
      readTime: "4 MIN READ",
    },
  ];

  const blogData = blogs.length > 0 ? blogs : dummyBlogs;

  return (
    <div className="section blogs_slider_wrapper">
      <div className="autoContent"> 
        <div className="blogs_slider_header">
          <h2 className="slider_title">Related Posts</h2>
          <div className="slider_navigation">
            <button ref={prevRef} className="custom_prev">
              <HiOutlineArrowLeft />
            </button>
            <button ref={nextRef} className="custom_next">
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>
 
        <div className="blogs_slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onInit={(swiper) => { 
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blog_card" data-aos="fade-up">
                  <div className="blog_card_img">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="blog_card_body">
                    <span className="blog_card_category">
                      {blog.category}
                    </span>
                    <h3 className="blog_card_title">{blog.title}</h3>
                    <div className="blog_card_footer">
                      <Link to={blog.link} className="read_more">
                        READ MORE &rarr;
                      </Link>
                      <span className="read_time">{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BlogsSlider;