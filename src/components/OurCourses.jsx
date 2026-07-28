import React from "react";
 
import our_courses_img1 from "../assets/images/our_courses_img1.png";
import our_courses_img2 from "../assets/images/our_courses_img2.png";
import our_courses_img3 from "../assets/images/our_courses_img3.png";
import { Link } from "react-router-dom";
 
function OurCourses() {
  const courses = [
    {
      image: our_courses_img1,
      title: "Web Design & Development",
      description:
        "We excel in delivering high-quality web development services tailored to your business needs.",
    },
    {
      image: our_courses_img2,
      title: "App Development",
      description:
        "App development services cater to a diverse range of platforms, ensuring that your app reaches its full potential.",
    },
    {
      image: our_courses_img3,
      title: "IOS Application",
      description:
        "IOS development ensures that your app not only meets but exceeds the high standards of the Apple ecosystem.",
    },
  ];

  return (
    <div className="section our_courses_sec">
      <div className="autoContent">
        <div className="our_courses_sec_inner">
          <div className="section_heading">
            <span data-aos="fade-up">Our Courses</span>
            <h3 data-aos="fade-up">Elevate Your Skills with Our Expert-Led Courses</h3>
            <div className="section_heading_line" data-aos="fade-up"></div>
          </div>

          <div className="our_courses_content">
            {courses.map((course, index) => (
              <div className="course_card" key={index} data-aos="fade-up">
                <div className="course_img">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course_info">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
 
          <div className="courses_btn_wrapper" data-aos="fade-up">
            <Link to="/courses" className="all_btn">
              View All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCourses;