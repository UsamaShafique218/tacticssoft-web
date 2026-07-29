import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog_img1 from "../assets/images/blog_img1.png"
import BlogLayout from "../components/BlogLayout";

 

function BlogDetails() {

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'IT', link: '/it' },
        { label: 'Blog', link: null }
    ];


    return (
        <div className="blogs_wrapper blogs_details_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <strong data-aos="fade-up">IT</strong>
                            <h1 data-aos="fade-up">Blog5</h1>
                            <p>
                                January 3, 2026
                                . 5 minutes read</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}

            <BlogLayout
                breadcrumbLinks={breadcrumbs}
                leftContent={
                    <div>
                        <h3>IN THIS ARTICLE</h3>
                        <ul>
                            <li><a href="#section1">Why Scaling Enterprise...</a></li>
                            <li><a href="#section2">Basic Building Blocks...</a></li>
                        </ul>
                    </div>
                }
                middleContent={
                    <div>
                        <h1>AI Chatbot Development</h1>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p>
                        <p>AI chatbot development is taking off...</p> 
                        {/* Bohot sara content yahan daalein */}
                    </div>
                }
                rightContent={
                    <div>
                        <h3>SHARE</h3>
                        {/* Social Icons */}
                        <div className="banner">
                            <button>Let's Talk!</button>
                        </div>
                    </div>
                }
            />
            {/*  */}

        </div>
    );
}

export default BlogDetails;