import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/web_development_img1.png";
import overlapImgDefault from "../../assets/images/web_dev_img1.png";

import appMainImg from "../../assets/images/web_dev_img4.png";
import appOverlapImg from "../../assets/images/web_dev_img3.png";



function WebDevelopment() {
    const customCheckList = [
        {
            title: "Turn Vision into Reality",
            description: "We develop feature-rich, high-performing websites that deliver seamless functionality and robust performance."
        },
        {
            title: "Optimize for Growth",
            description: "Our web development solutions ensure scalability, security, and efficiency, empowering your business for long-term success."
        }
    ];
    const customFeatures = [
        {
            title: "Custom-Tailored Solutions",
            description: "We build bespoke web applications designed to meet your unique goals.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Secure & Scalable Architecture",
            description: "Our development process ensures security, performance, and scalability.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Seamless Integration",
            description: "We integrate third-party tools, APIs, and systems to enhance functionality.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        }
    ];

    const customSoftwareFaqs = [
        {
            question: "How Long Does Web Development Take?",
            answer: "The timeframe depends on the project’s complexity, but we deliver efficient solutions within set deadlines."
        },
        {
            question: "What Technologies Do You Use for Development?",
            answer: "We work with modern technologies like PHP, Laravel, React, Node.js, and more to ensure top performance."
        },
        {
            question: "Can You Upgrade or Modify an Existing Website?",
            answer: "Yes, we enhance and optimize existing websites to improve performance, security, and user experience."
        },
        {
            question: "Do You Provide Ongoing Maintenance and Support?",
            answer: "Yes, we offer continuous support, updates, and security patches to keep your website running smoothly."
        }
    ];
    return (
        <div className="web_development__wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Web Development</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="Web Development Services"
                    title="Building Scalable, Secure, and High-Performance Websites"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we specialize in developing powerful, custom web solutions that enhance functionality and streamline business operations. Our expert developers utilize the latest technologies to build fast, secure, and scalable websites tailored to your needs.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="Web Development Services"
                    title="Custom Web Development Tailored to Your Business Needs"
                    description="From startups to enterprises, we create tailored web solutions that enhance user experience and maximize digital potential."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "100% Satisficed Clients" },
                        { id: 2, number: "1k+", label: "Projects Delivered" }
                    ]}
                />
                <CtaBanner
                    subtitle="Website Development"
                    title="Ready to Build a Powerful Website?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Secure & Scalable Solutions"
                    title="Why Choose Our Web Development Services?"
                    description="We provide end-to-end web development services that focus on delivering cutting-edge solutions for seamless digital transformation. Our approach ensures security, efficiency, and scalability for long-term success."
                    featuresList={customFeatures}
                />
                <FaqSection
                    tagline="FAQs"
                    title="Frequently Asked Questions"
                    faqsList={customSoftwareFaqs}
                />
            </div>
        </div>

    );
}

export default WebDevelopment;