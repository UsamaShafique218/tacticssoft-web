import React from 'react';
import ContactForm from '../components/ContactForm';
import OfficeLocations from '../components/OfficeLocations';


function ContactUs() {
    return (
        <div className="contact_us_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section contact_detail_sec">
                <div className="autoContent">
                    <div className="contact_detail_sec_inner">
                        <div className="section_heading">
                            <span data-aos="fade-up">Contact Us</span>
                            <h3 data-aos="fade-up">Get In Touch</h3>
                            <div className="section_heading_line" data-aos="fade-up"></div>
                            <p data-aos="fade-up">
                                At TacticsSoft, we value your feedback, questions, and any inquiries you may have. Whether you’re seeking support, have a business proposition, or just want to share your thoughts, our team is here to assist you.
                            </p>
                        </div> 

                        <OfficeLocations />
                        <ContactForm />
                    </div>
                </div>
            </section> 

            
        </div>
    );
}

export default ContactUs;