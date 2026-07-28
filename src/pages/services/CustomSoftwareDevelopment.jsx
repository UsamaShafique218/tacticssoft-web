import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";

import mainImgDefault from "../../assets/images/about_main_img.png";
import overlapImgDefault from "../../assets/images/web_dev_img1.png";


import appMainImg from "../../assets/images/web_dev_img2.png";
import appOverlapImg from "../../assets/images/web_dev_img3.png";



function CustomSoftwareDevelopment() {
    const customCheckList = [
        {
            title: "Transform Business Operations",
            description: "We create custom software that streamlines processes, automates tasks, and optimizes workflow."
        },
        {
            title: "Future-Ready Solutions",
            description: "Our software solutions are built with scalability and flexibility to support long-term business growth."
        }
    ];
    const customFeatures = [
        {
            title: "Tailored to Your Needs",
            description: "We develop software solutions that align perfectly with your business requirements.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Scalable & Secure",
            description: "Our solutions are designed to grow with your business while ensuring data security.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Seamless Integration",
            description: "We ensure smooth integration with your existing systems for enhanced efficiency.",
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
            question: "How Long Does Custom Software Development Take?",
            answer: "CoTimelines vary based on complexity, but we prioritize efficiency without compromising quality."
        },
        {
            question: "Can the Software Be Scaled in the Future?",
            answer: "Yes, our solutions are designed to be flexible and scalable as your business grows."
        },
        {
            question: "Do You Provide Ongoing Support and Maintenance?",
            answer: "Absolutely! We offer continuous support, updates, and maintenance services."
        },
        {
            question: "Can You Integrate the Software with Existing Systems?",
            answer: "Yes, we ensure seamless integration with your current tools and platforms for a smooth transition."
        }
    ];
    return (
        <div className="web_dev_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Custom Software Development</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="Custom Software Development Services"
                    title="Tailored, Scalable, and High-Performance Software Solutions"
                    description={
                        <>
                            At <strong>TacTics Soft</strong>, we develop custom software solutions designed to meet your unique business needs. Our expert developers build secure, efficient, and scalable applications that enhance productivity and drive success.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="Bespoke Solutions for Every Industry"
                    title="Custom Software Development Services"
                    description="From startups to enterprises, we design and develop tailored software that aligns with your business goals and enhances operational efficiency."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Custom Solutions Delivered" },
                        { id: 2, number: "1k+", label: "Satisfied Clients" }
                    ]}
                />
                <CtaBanner
                    subtitle="Custom Software Development"
                    title="Need a Custom Solution for Your Business?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Scalable & Secure Solutions"
                    title="Why Choose Our Custom Software Development Services?"
                    description="We create powerful, innovative, and scalable software solutions that improve efficiency and accelerate business growth."
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

export default CustomSoftwareDevelopment;