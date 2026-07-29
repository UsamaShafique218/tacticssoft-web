import React from "react";
import ContactForm from "./ContactForm"; 

 import reply_icon from "../assets/icons/reply.png"
 import calling_icon from "../assets/icons/calling.png"
   

function RequestQuote() {
    return (
        <div id="request-quote"
            className="section request_quote_sec"
        > 
            <div className="autoContent">
                <div className="request_quote_inner"> 
                    <div className="request_quote_left">
                        <div className="section_heading">
                            <span data-aos="fade-up">Request A Quote</span>
                            <h3 data-aos="fade-up">Need A Free Quote? <br /> Feel Free To Contact Us</h3>
                            <div className="section_heading_line" data-aos="fade-up"></div>
                            <p data-aos="fade-up">
                                Need a free quote? We’re ready to assist! Contact Tactics Soft
                                today to discuss your business needs, and our team will respond
                                promptly to schedule a meeting. Our experts will carefully
                                understand your requirements and craft a tailored solution to
                                achieve your goals. Whether you need web development, app design,
                                or software solutions, we’re here to help. Get your free quote
                                now and let us be your trusted partner in driving success!
                            </p>
                        </div>

                        <div className="availability_sec">
                            <ul>
                                <li data-aos="fade-up">
                                    <div className="availability_content">
                                        <div className="ac_icon">
                                            <img src={reply_icon} alt="#" />
                                        </div>
                                        <p>Reply within 24 hours</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className="availability_content">
                                        <div className="ac_icon">
                                            <img src={calling_icon} alt="#" />
                                        </div>
                                        <p>24 hrs telephone support</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="call_action_box" data-aos="fade-up">
                            <div className="phone_icon_box">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="phone_icon_svg"
                                >
                                    <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                                </svg>
                            </div>
                            <div className="call_info">
                                <span>Call to ask any question</span>
                                <a href="tel:+923117982030">+92 311 798 2030</a>
                            </div>
                        </div>
                    </div>
 
                    <div className="request_quote_right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestQuote;