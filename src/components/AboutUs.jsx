import React from "react";
import mainImg from "../assets/images/about_main_img.png";
import overlapImg from "../assets/images/about_overlap_img.png";
import { Link } from "react-router-dom";
import CallActionBox from "./CallActionBox";
import FeaturesList from "./FeaturesList";

function AboutUs() {


    return (
        <div className="section about_us_sec">
            <div className="autoContent">
                <div className="about_us_inner">
                    <div className="about_us_left">
                        <div className="section_heading">
                            <span data-aos="fade-up">About Us</span>
                            <h3 data-aos="fade-up">Hi, we are TacTics Soft</h3>
                            <div className="section_heading_line" data-aos="fade-up"></div>
                            <p data-aos="fade-up">
                                At TacTics Soft, we are dedicated to shaping the future of
                                technology through innovation and excellence. Our mission is to
                                empower businesses with cutting-edge solutions that drive growth,
                                efficiency, and success. By combining expertise and creativity,
                                we help organizations achieve their goals in an ever-evolving
                                digital landscape.
                            </p>
                        </div>

                        <FeaturesList />
                        <CallActionBox />

                        <Link to="javascript:void(0)" className="all_btn" data-aos="fade-up">
                            Request A Quote
                        </Link>
                    </div>

                    <div className="about_us_right">
                        <div className="about_img_wrapper">
                            <div className="main_img_wrapper" data-aos="fade-up">
                                <img
                                    src={mainImg}
                                    alt="TacTics Soft Office"
                                    className="main_img"
                                />
                            </div>
                            <div className="overlap_img_wrapper" data-aos="fade-right">
                                <img
                                    src={overlapImg}
                                    alt="TacTics Soft Work"
                                    className="overlap_img"
                                />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;