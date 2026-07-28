import React from "react";
import ContactForm from "./ContactForm";  

function RequestQuote() {
    return (
        <div
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 84.4-59.5 155-139.7 172c-12.3 2.6-24.3-5.4-26.9-17.7s5.4-24.3 17.7-26.9c58.7-12.5 100.9-63.9 100.9-127.4c0-70.7-57.3-128-128-128H224v64c0 12.6-7.5 24.1-19 29.2s-25 2.8-34-6.2l-160-160c-12.5-12.5-12.5-32.8 0-45.3l160-160c9-9 22.5-11.3 34-6.2z" />
                                            </svg>
                                        </div>
                                        <p>Reply within 24 hours</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <div className="availability_content">
                                        <div className="ac_icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                                            </svg>
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