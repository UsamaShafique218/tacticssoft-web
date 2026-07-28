import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/mobile_app_img1.png";
import overlapImgDefault from "../../assets/images/client_img1.png";

import appMainImg from "../../assets/images/about_main_img.png";
import appOverlapImg from "../../assets/images/mobile_app_img2.png";



function MobileAppDevelopment() {
    const customCheckList = [
        {
            title: "Turn Ideas into Powerful Apps",
            description: "We transform your vision into feature-rich mobile applications designed for seamless functionality."
        },
        {
            title: "Enhance User Experience",
            description: "Our apps are intuitive, responsive, and optimized for maximum performance across all devices and platforms."
        }
    ];
    const customFeatures = [
        {
            title: "Custom App Development",
            description: "We develop tailored mobile solutions for iOS, Android, and cross-platform.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "User-Centric Design",
            description: "Our apps are built with a seamless UI/UX for an engaging user experience.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Secure & Scalable Architecture",
            description: "We ensure robust security and scalability to support long-term growth.",
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
            question: "How Long Does Mobile App Development Take?",
            answer: "The timeline varies based on complexity, but we deliver high-quality apps within the agreed timeframe."
        },
        {
            question: "Do You Develop Apps for Both iOS and Android?",
            answer: "Yes, we create native apps for iOS and Android as well as cross-platform applications."
        },
        {
            question: "Can You Upgrade or Maintain an Existing App?",
            answer: "Absolutely! We provide app maintenance, updates, and feature enhancements for existing applications."
        },
        {
            question: "Do You Offer Post-Launch Support?",
            answer: "Yes, we provide ongoing support, monitoring, and optimization to ensure your app runs smoothly."
        }
    ];
    return (
        <div className="mob_app_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Mobile App Development</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="Mobile App Development Services"
                    title="Innovative, Scalable, and High-Performance Mobile Solutions"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we develop cutting-edge mobile applications that enhance user experience and drive business growth. Our expert team builds secure, scalable, and high-performing apps tailored to your specific needs.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="Mobile App Development Services"
                    title="Custom App Solutions for Every Business"
                    description="From startups to enterprises, we create innovative mobile applications that deliver real value and user satisfaction."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Apps Developed" },
                        { id: 2, number: "1k+", label: "Satisfied Clients" }
                    ]}
                />
                <CtaBanner
                    subtitle="Mobile App Development"
                    title="Ready to Build a High-Performance App?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Secure & Scalable Solutions"
                    title="Why Choose Our Mobile App Development Services?"
                    description="We build scalable, user-friendly, and innovative mobile apps that elevate your business and engage users effectively."
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

export default MobileAppDevelopment;