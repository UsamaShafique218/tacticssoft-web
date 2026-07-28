import React from "react";

import our_courses_img1 from "../assets/images/web_design_banner_bg.png";
import our_courses_img2 from "../assets/images/frontend_dev.png";
import our_courses_img3 from "../assets/images/web_maintenance_banner_bg.png";
import our_courses_img4 from "../assets/images/ai_chatbot_banner_bg.png";
import our_courses_img5 from "../assets/images/ecommerce_solutions.png";
import our_courses_img6 from "../assets/images/mobile_app_dev_banner_bg.png";
import our_courses_img7 from "../assets/images/iOS-Development.png";


import { Link } from "react-router-dom";

function CoursesScreen() {

    const courses = [
        {
            image: our_courses_img1,
            title: "Web Design & UI/UX",
            description:
                "Learn to design visually stunning, user-friendly, and responsive websites.",
        },
        {
            image: our_courses_img2,
            title: "Front-End Development",
            description:
                "Master HTML, CSS, JavaScript, and frameworks to create interactive web interfaces.",
        },
        {
            image: our_courses_img3,
            title: "Back-End Development",
            description:
                "Build robust server-side applications with databases, APIs, and authentication.",
        },
        {
            image: our_courses_img4,
            title: "Full Stack Development",
            description:
                "Become a versatile developer by mastering both front-end and back-end technologies.",
        },
        {
            image: our_courses_img5,
            title: "CMS & E-Commerce Development",
            description:
                "Develop dynamic websites and online stores using WordPress, Shopify, and more.",
        },
        {
            image: our_courses_img6,
            title: "Flutter Development",
            description:
                "Build high-performance, scalable cross-platform mobile apps with Flutter and Dart.",
        },
        {
            image: our_courses_img7,
            title: "iOS Development",
            description:
                "Create seamless and intuitive iOS applications using Swift, Xcode, and Apple’s latest frameworks.",
        },
    ];

    return (
        <div className="courses_screen_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Courses</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section our_courses_sec">
                <div className="autoContent">
                    <div className="our_courses_sec_inner">
                        <div className="section_heading">
                            <span data-aos="fade-up">Our Courses</span>
                            <h3 data-aos="fade-up">Elevate Your Skills with Our Expert-Led Courses</h3>
                            <div className="section_heading_line" data-aos="fade-up"></div>
                            <p data-aos="fade-up">Empower your future with cutting-edge courses designed to enhance your skills and expertise in the digital world. At <strong>TacTics Soft</strong>, we offer industry-relevant training programs that equip you with practical knowledge and hands-on experience. Whether you’re a beginner or an experienced professional, our courses are tailored to help you grow and succeed.</p>
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
 
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CoursesScreen;