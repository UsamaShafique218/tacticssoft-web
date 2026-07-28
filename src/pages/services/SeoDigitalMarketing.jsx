import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/seo_digital_img1.png";
import overlapImgDefault from "../../assets/images/seo_digital_img2.png";

import appMainImg from "../../assets/images/seo_digital_img3.png";
import appOverlapImg from "../../assets/images/seo_digital_img4.png";



function SeoDigitalMarketing() {
    const customCheckList = [
        {
            title: "Dominate Search Rankings",
            description: "Our SEO strategies improve your website’s ranking on search engines, driving organic traffic and maximizing online visibility."
        },
        {
            title: "Maximize Digital Impact",
            description: "We craft tailored digital marketing campaigns to enhance brand awareness and customer engagement across multiple platforms."
        }
    ];
    const customFeatures = [
        {
            title: "Advanced SEO Strategies",
            description: "We optimize your website for search engines, improving rankings and traffic.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Targeted Marketing Campaigns",
            description: "From social media to PPC advertising, we create data-driven marketing campaigns.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Analytics-Driven Approach",
            description: "Our marketing efforts are backed by real-time data and insights.",
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
            question: "How Long Does SEO Take to Show Results?",
            answer: "SEO is a long-term strategy, and results typically start appearing within 3–6 months, depending on competition and industry."
        },
        {
            question: "Which Digital Marketing Services Do You Offer?",
            answer: "We provide SEO, PPC advertising, social media marketing, content marketing, and email marketing."
        },
        {
            question: "Can You Help with Local SEO?",
            answer: "Yes, we optimize your business for local searches to increase visibility in your target area."
        },
        {
            question: "Do You Provide Performance Reports?",
            answer: "Yes, we offer regular reports and insights to track your campaign’s success and improvements."
        }
    ];
    return (
        <div className="seo_digital_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">SEO & Digital Marketing</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="SEO & Digital Marketing Services"
                    title="Boost Your Online Presence and Drive Targeted Traffic"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we help businesses grow through data-driven SEO and digital marketing strategies. Our experts optimize your online presence to increase visibility, enhance engagement, and generate high-quality leads that convert.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="SEO & Digital Marketing Services"
                    title="Tailored Strategies for Business Growth"
                    description="We provide customized SEO and marketing solutions that align with your goals, ensuring measurable success and long-term growth."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Successful Campaigns" },
                        { id: 2, number: "1k+", label: "Clients Benefited" }
                    ]}
                />
                <CtaBanner
                    subtitle="Digital Marketing & SEO"
                    title="Ready to Scale Your Online Presence?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Proven Strategies for Maximum Growth"
                    title="Why Choose Our SEO & Digital Marketing Services?"
                    description="We combine advanced SEO techniques with powerful digital marketing strategies to drive engagement, boost conversions, and establish a strong online presence."
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

export default SeoDigitalMarketing;