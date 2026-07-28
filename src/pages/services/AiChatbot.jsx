import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/ai_chatbot_img1.png";
import overlapImgDefault from "../../assets/images/ai_chatbot_img2.png";

import appMainImg from "../../assets/images/ai_chatbot_img3.png";
import appOverlapImg from "../../assets/images/ai_chatbot_img4.png";



function AiChatbot() {
    const customCheckList = [
        {
            title: "Automate Customer Interactions",
            description: "Our AI-powered chatbots handle inquiries, support, and sales, improving efficiency and engagement."
        },
        {
            title: "Smart & Adaptive Learning",
            description: "AI-driven solutions learn and evolve to provide accurate, context-aware responses over time."
        }
    ];
    const customFeatures = [
        {
            title: "24/7 Customer Support",
            description: "AI chatbots provide instant responses and continuous support without delays.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Seamless System Integration",
            description: "Our solutions integrate with websites, apps, and CRM platforms.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Intelligent Automation",
            description: "AI automation reduces workload, increases efficiency, and enhances experience.",
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
            question: "How Can AI Chatbots Benefit My Business?",
            answer: "They automate support, improve response times, and enhance customer satisfaction."
        },
        {
            question: "Can AI Chatbots Understand Multiple Languages?",
            answer: "Yes, our chatbots support multilingual interactions for a global audience."
        },
        {
            question: "Do You Offer Custom AI Solutions?",
            answer: "Absolutely! We build AI chatbots tailored to your business needs and goals."
        },
        {
            question: "Can Chatbots Handle Complex Queries?",
            answer: "Yes, our AI-powered bots use machine learning to understand and respond to complex customer queries effectively."
        }
    ];
    return (
        <div className="ai_chatbot_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">AI & Chatbot</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="AI & Chatbot Solutions"
                    title="Enhance Customer Engagement with Intelligent Automation"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we develop AI-driven chatbot solutions that streamline communication, automate processes, and improve customer experiences. Our intelligent bots provide instant responses, personalized interactions, and seamless integration with your business operations.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="AI & Chatbot Development Services"
                    title="Revolutionizing Customer Support & Business Automation"
                    description="We create AI chatbots that enhance user engagement, automate workflows, and drive business growth across industries."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "AI Solutions Deployed" },
                        { id: 2, number: "1k+", label: "Businesses Automated" }
                    ]}
                />
                <CtaBanner
                    subtitle="AI & Chatbot Solutions"
                    title="Want to Automate Customer Support with AI?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Enhance Productivity, and Drive Automation"
                    title="Why Choose Our AI & Chatbot Solutions?"
                    description="Our AI-driven chatbot solutions optimize interactions, enhance productivity, and drive automation for businesses of all sizes."
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

export default AiChatbot;