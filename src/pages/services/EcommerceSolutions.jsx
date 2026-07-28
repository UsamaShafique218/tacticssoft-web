import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/ecommerce_img1.png";
import overlapImgDefault from "../../assets/images/ecommerce_img2.png";

import appMainImg from "../../assets/images/ecommerce_img3.png";
import appOverlapImg from "../../assets/images/ecommerce_img4.png";



function EcommerceSolutions() {
    const customCheckList = [
        {
            title: "Seamless Online Shopping Experience",
            description: "We create intuitive and engaging e-commerce platforms that provide a smooth shopping experience."
        },
        {
            title: "Secure & Scalable Solutions",
            description: "Our platforms are designed for security, performance, and scalability to support business growth."
        }
    ];
    const customFeatures = [
        {
            title: "Custom E-Commerce Development",
            description: "Tailored solutions designed to meet your business needs and customer expectations.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Secure Payment Integrations",
            description: "Seamless integration with trusted payment gateways for secure transactions.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Mobile & SEO Optimization",
            description: "Fully optimized for mobile devices and search engines to maximize visibility and conversions.",
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
            question: "What Platform Should I Use for My Online Store?",
            answer: "We develop e-commerce websites using platforms like Shopify, WooCommerce, Magento, and custom solutions."
        },
        {
            question: "Can You Migrate My Existing Store to a New Platform?",
            answer: "Yes, we offer hassle-free migration services to ensure a smooth transition without data loss."
        },
        {
            question: "Do You Provide Inventory & Order Management Features?",
            answer: "Absolutely! Our solutions include real-time inventory tracking, order management, and automation."
        },
        {
            question: "How Can I Improve My E-Commerce Sales?",
            answer: "We implement SEO, performance optimization, and conversion-focused design strategies to boost sales."
        }
    ];
    return (
        <div className="ecommerce_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">E-Commerce Solutions</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="E-Commerce Solutions"
                    title="Transform Your Business with Scalable Online Stores"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we specialize in building powerful e-commerce platforms that drive sales and enhance customer experiences. Our solutions include user-friendly interfaces, secure payment integrations, and advanced features to help businesses grow in the digital marketplace.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="E-Commerce Development Services"
                    title="Custom Online Store Solutions for Every Business"
                    description="From startups to enterprises, we build e-commerce platforms that maximize conversions and enhance brand presence."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Online Stores Built" },
                        { id: 2, number: "1k+", label: "Successful Transactions" }
                    ]}
                />
                <CtaBanner
                    subtitle="E-Commerce Solutions"
                    title="Ready to Launch or Scale Your Online Store?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Secure & Scalable Solutions"
                    title="Why Choose Our E-Commerce Solutions?"
                    description="We develop high-performance, secure, and scalable e-commerce platforms that drive growth and success."
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

export default EcommerceSolutions;