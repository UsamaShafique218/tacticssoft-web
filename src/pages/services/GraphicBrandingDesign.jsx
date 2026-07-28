import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/graphic_design_img1.png";
import overlapImgDefault from "../../assets/images/graphic_design_img2.png";

import appMainImg from "../../assets/images/graphic_design_img3.png";
import appOverlapImg from "../../assets/images/graphic_design_img4.png";



function GraphicBrandingDesign() {
    const customCheckList = [
        {
            title: "Transform Your Brand Identity",
            description: "We craft visually stunning designs that reflect your brand’s essence and create a powerful market presence."
        },
        {
            title: "Engage & Inspire",
            description: "Our designs captivate audiences, enhance brand recognition, and create meaningful customer connections."
        }
    ];
    const customFeatures = [
        {
            title: "Custom Branding Solutions",
            description: "We design unique logos, brand kits, and visuals tailored to your identity.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Creative & Strategic Approach",
            description: "Our designs combine creativity with strategy to boost engagement.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Consistent & Professional Aesthetic",
            description: "We ensure brand consistency across all platforms and materials.",
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
            question: "Why Is Branding Important for My Business?",
            answer: "A strong brand identity builds trust, enhances recognition, and sets you apart from competitors."
        },
        {
            question: "What Graphic Design Services Do You Offer?",
            answer: "We provide logo design, business cards, brochures, social media graphics, and complete brand identity solutions."
        },
        {
            question: "Can You Redesign My Existing Branding?",
            answer: "Yes, we refresh outdated branding and designs to align with modern trends and business goals."
        },
        {
            question: "Do You Provide Print-Ready Designs?",
            answer: "Absolutely! We create high-resolution, print-ready designs for all branding and marketing materials."
        }
    ];
    return (
        <div className="graphic_branding_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Graphic & Branding Design Services</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="Graphic & Branding Design Services"
                    title="Create a Strong Visual Identity for Your Brand"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we design compelling graphics and branding materials that leave a lasting impression. Our creative team ensures your brand stands out with unique, high-quality visuals that resonate with your audience.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="Graphic & Branding Design Services"
                    title="Custom Design Solutions for Every Business"
                    description="From logo design to complete brand identity, we create stunning visuals that elevate your brand’s presence."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Brands Transformed" },
                        { id: 2, number: "1k+", label: "Design Projects Completed" }
                    ]}
                />
                <CtaBanner
                    subtitle="Graphic & Branding Design"
                    title="Ready to Build a Powerful Brand Identity?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Creative & Impactful Brand Solutions"
                    title="Why Choose Our Graphic & Branding Design Services?"
                    description="We create visually appealing and impactful designs that align with your brand’s vision and marketing goals."
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

export default GraphicBrandingDesign;