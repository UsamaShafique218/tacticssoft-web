import React from "react";
import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection";
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";
 
import mainImgDefault from "../../assets/images/training_courses_img1.png";
import overlapImgDefault from "../../assets/images/ai_chatbot_img4.png";

import appMainImg from "../../assets/images/training_courses_img2.png";
import appOverlapImg from "../../assets/images/web_dev_img3.png";



function TrainingCourses() {
    const customCheckList = [
        {
            title: "Learn from Industry Experts",
            description: "Gain valuable insights and practical knowledge from experienced professionals in the IT and digital fields."
        },
        {
            title: "Boost Your Career with In-Demand Skills",
            description: "Our courses cover essential digital skills to help you stay competitive and excel in your career."
        }
    ];
    const customFeatures = [
        {
            title: "Hands-On Training",
            description: "Learn through real-world projects and interactive sessions.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Industry-Recognized Certifications",
            description: "Earn certificates that boost credibility and enhance job opportunities.",
            icon: (
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Flexible Learning Options",
            description: "Choose from online, in-person, and hybrid training programs tailored to your needs.",
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
            question: "What PWho Can Enroll in These Courses?latform Should I Use for My Online Store?",
            answer: "Our courses are designed for beginners, professionals, and businesses looking to upskill."
        },
        {
            question: "Do You Offer Certification After Completion?",
            answer: "Yes, all our courses include certifications recognized in the industry."
        },
        {
            question: "Are Your Courses Practical or Theory-Based?",
            answer: "We focus on practical, hands-on learning with real-world applications."
        },
        {
            question: "Can Businesses Train Their Employees Through Your Programs?",
            answer: "Absolutely! We offer corporate training solutions tailored to business needs."
        }
    ];
    return (
        <div className="training_courses_wrapper">
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <h1 data-aos="fade-up">IT & Digital Skills Training Courses</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FeatureSection
                    tagline="IT & Digital Skills Training Courses"
                    title="Empowering Individuals with In-Demand Tech Skills"
                    description={
                        <>
                           At <strong>TacTics Soft</strong>, we offer expert-led training courses designed to equip professionals with the latest IT and digital skills. Our hands-on approach ensures practical learning, helping individuals and businesses stay ahead in today’s competitive tech landscape.
                        </>
                    }
                    mainImage={mainImgDefault}
                    mainImageAlt="Mobile App Development Team"
                    overlapImage={overlapImgDefault}
                    overlapImageAlt="Mobile App UI Design"
                    checkListItems={customCheckList}
                />

                <FeatureOverviewSection
                    tagline="Professional IT Training & Digital Courses"
                    title="Comprehensive Programs to Advance Your Career"
                    description="We provide specialized training in web development, digital marketing, AI, cybersecurity, and more to help learners enhance their expertise."
                    mainImage={appMainImg}
                    mainImageAlt="Mobile App Architecture"
                    overlapImage={appOverlapImg}
                    overlapImageAlt="App Development Team"
                    buttonText="Get Free Estimation"
                    buttonLink="/contact"
                    statsData={[
                        { id: 1, number: "1k+", label: "Students Trained" },
                        { id: 2, number: "1k+", label: "Successful Career Transitions" }
                    ]}
                />
                <CtaBanner
                    subtitle="IT & Digital Skills Training"
                    title="Ready to Upgrade Your Skills and Career?"
                    buttonText="Contact Us Today"
                    backgroundImage={cts_bg_img1}
                />
                <WhyChoose
                    tagline="Industry-Recognized Certifications"
                    title="Why Choose Our IT & Digital Skills Training?"
                    description="Our training programs are designed for practical learning, ensuring career growth and technical expertise."
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

export default TrainingCourses;