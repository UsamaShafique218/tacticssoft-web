import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog_img1 from "../assets/images/blog_img1.png"
import BlogLayout from "../components/BlogLayout";
import BlogsSlider from "../components/BlogsSlider";


function BlogDetails() {

    return (
        <div className="blogs_wrapper blogs_details_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <strong data-aos="fade-up">AI/ML</strong>
                            <h1 data-aos="fade-up">AI Chatbot Development: Build Bots That Scale Your Business</h1>
                            <p data-aos="fade-up">
                                January 3, 2026
                                . 5 minutes read</p>
                        </div>
                    </div>
                </div>
            </div> 
            <BlogLayout /> 
            <BlogsSlider />
            
        </div>
    );
}

export default BlogDetails;