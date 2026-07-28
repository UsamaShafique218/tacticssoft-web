import React from "react";
import choose_us_sec_img from "../assets/images/choose_us_sec_img.png"

function ChooseUs() {
    return (
        <div className="section choose_us_sec">
            <div className="autoContent">
                <div className="choose_us_sec_inner">
                    <div className="section_heading">
                        <span data-aos="fade-up">Why Choose Us</span>
                        <h3 data-aos="fade-up">We are Your Growth Partners</h3>
                        <div className="section_heading_line" data-aos="fade-up"></div>
                    </div>
                    <div className="choose_us_content"> 
                        <div className="choose_us_col">
                            <div className="choose_us_card" data-aos="fade-up">
                                <div className="icon_box">
                                    <i></i>
                                </div>
                                <h3>Top Rated</h3>
                                <p>
                                    With over 500+ satisfied clients and an 85% retention rate, Tactics
                                    Soft delivers impactful results that help businesses thrive.
                                    Contact us to explore our case studies and see the difference we
                                    make.
                                </p>
                            </div>

                            <div className="choose_us_card" data-aos="fade-up">
                                <div className="icon_box">
                                    <i></i>
                                </div>
                                <h3>Professional Staff</h3>
                                <p>
                                    Our team comprises seasoned professionals and industry experts. Every
                                    member brings unique skills and expertise to delivers innovative
                                    solutions, ensuring your business gets the best support.
                                </p>
                            </div>
                        </div>

                        <div className="choose_us_img_col" data-aos="fade-up">
                            <img
                                src={choose_us_sec_img}
                                alt="Why Choose Us"
                            />
                        </div>

                        <div className="choose_us_col" >
                            <div className="choose_us_card" data-aos="fade-up">
                                <div className="icon_box">
                                    <i></i>
                                </div>
                                <h3>Customer-Centric Focus</h3>
                                <p>
                                    We prioritize your needs and craft strategies designed to achieve
                                    your goals. By listening carefully to your requirements, we deliver
                                    customized solutions that fuel your business's growth.
                                </p>
                            </div>

                            <div className="choose_us_card" data-aos="fade-up">
                                <div className="icon_box">
                                    <i></i>
                                </div>
                                <h3>Fair Prices</h3>
                                <p>
                                    Our pricing is transparent, competitive, and designed to provide
                                    exceptional value for your investment. Your satisfaction is our
                                    priority, and we're committed to excellence every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;