import React from "react";

// Custom Icon Images Import
// import choose_us_sec_img from "../assets/images/choose_us_sec_img.png"  



function OurServices() {
    const services = [
        {
            //   icon: choose_us_sec_img,
            title: "Web Design & Development",
            description: "Building responsive websites tailored to your business needs.",
        },
        {
            //   icon: mobileIcon,
            title: "Mobile App Development",
            description: "Creating customized top-notch mobile apps for better user engagement.",
        },
        {
            //   icon: seoIcon,
            title: "SEO",
            description: "Optimizing your site to rank higher & drive organic traffic to attract leads.",
        },
         {
            //   icon: seoIcon,
            title: "AI & Chatbot Solutions",
            description: "AI chatbots for automation and better customer experience.",
        },
        {
            //   icon: seoIcon,
            title: "IT Consulting",
            description: "Providing expert guidance on technology and system optimization.",
        },
        {
            //   icon: seoIcon,
            title: "Custom Software Solutions",
            description: "Developing personalized software to streamline business processes.",
        },
    ];

    return (
        <div className="section our_services_sec">
            <div className="autoContent">
                <div className="our_services_sec_inner">
                    <div className="section_heading">
                        <span data-aos="fade-up">Our Services</span>
                        <h3 data-aos="fade-up">Grow Your Brand with a Leading Tactics Soft</h3>
                        <div className="section_heading_line" data-aos="fade-up"></div>
                    </div>
                </div>

                <div className="our_services_content">
                    {services.map((service, index) => (
                        <div className="service_card" key={index} data-aos="fade-up">
                            <div className="service_icon">
                                {/* <img src={service.icon} alt={service.title} /> */}
                            </div>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <a href="#readmore" className="read_more_btn">
                                Read More
                                <i className="arrow_icon"> 
                                    <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
                                        <rect x="0" fill="none" width="24" height="24" /> 
                                        <g>

                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />

                                        </g>

                                    </svg>
                                </i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurServices;