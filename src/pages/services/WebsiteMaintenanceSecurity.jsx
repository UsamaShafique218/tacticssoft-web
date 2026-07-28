import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 

import mainImgDefault from "../../assets/images/web_dev_img2.png";
import overlapImgDefault from "../../assets/images/web_dev_img3.png";


import appMainImg from "../../assets/images/web_dev_img4.png";
import appOverlapImg from "../../assets/images/web_dev_img5.png";



function WebsiteMaintenanceSecurity() {
    const customCheckList = [
        {
            title: "Ensure Peak Performance",
            description: "Regular updates, bug fixes, and performance optimizations keep your website running smoothly at all times."
        },
        {
            title: "Protect Against Cyber Threats",
            description: "We implement advanced security measures to safeguard your website from malware, hackers, and vulnerabilities."
        }
    ];
    const customFeatures = [
        {
            title: "Regular Updates & Fixes",
            description: "Keep your website up to date with the latest security patches & improvements.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Advanced Security Measures",
            description: "Regular malware scans, firewall protection, and threat monitoring.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "24/7 Monitoring & Support",
            description: "We offer round-the-clock monitoring to prevent downtime breaches.",
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
            question: "Why Is Website Maintenance Important?",
            answer: "Regular maintenance ensures your website remains fast, secure, and fully functional."
        },
        {
            question: "How Often Should My Website Be Updated?",
            answer: "We recommend regular updates to improve security, performance, and compatibility."
        },
        {
            question: "Do You Provide Emergency Support?",
            answer: "Yes, we offer quick response times for urgent website issues and security threats."
        },
        {
            question: "Can You Help Recover a Hacked Website?",
            answer: "Absolutely! We provide malware removal and security restoration services to get your site back online safely."
        }
    ];
    return (
        <div className="web_maintenance_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">Website Maintenance & Security</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="Website Maintenance & Security Services"
                    title="Keep Your Website Secure, Updated, and Running Smoothly"
                    description={
                        <>
                            At <strong>TacTics Soft</strong>, we provide comprehensive website maintenance and security solutions to ensure your site remains fast, secure, and fully functional. Our proactive approach helps prevent downtime, security threats, and performance issues.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="Website Maintenance & Security Services"
                    title="Website Maintenance & Security Services"
                    description="From routine updates to real-time security monitoring, we ensure your website is always secure, optimized, and up to date."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Websites Secured" },
                        { id: 2, number: "1k+", label: "Happy Clients" }
                    ]}
                />
                <CtaBanner
                    subtitle="Website Maintenance & Security"
                    title="Want to Keep Your Website Secure & Updated?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Advanced Security Solutions"
                    title="Why Choose Our Graphic & Branding Design Services?"
                    description="We provide proactive monitoring, security updates, and performance optimization to keep your website running at its best."
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

export default WebsiteMaintenanceSecurity;