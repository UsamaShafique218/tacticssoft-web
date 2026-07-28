import React from "react";

// Default SVG Icons
const defaultIcons = {
    responsive: (
        <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="16" width="22" height="30" rx="2" stroke="currentColor" strokeWidth="3" />
            <circle cx="21" cy="24" r="2" fill="currentColor" />
            <rect x="15" y="29" width="12" height="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="47" cy="18" r="14" stroke="currentColor" strokeWidth="3" />
            <path d="M33 18H61M47 4C51 8 53 14 53 18C53 22 51 28 47 32M47 4C43 8 41 14 41 18C41 22 43 28 47 32" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    performance: (
        <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" />
            <circle cx="32" cy="32" r="15" stroke="currentColor" strokeWidth="5" />
            <circle cx="32" cy="32" r="4" fill="currentColor" />
        </svg>
    ),
    scalable: (
        <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8L52 18L32 28L12 18L32 8Z" stroke="currentColor" strokeWidth="4" />
            <path d="M12 30L32 40L52 30" stroke="currentColor" strokeWidth="4" />
            <path d="M12 42L32 52L52 42" stroke="currentColor" strokeWidth="4" />
        </svg>
    )
};

// Default features list
const defaultFeatures = [
    {
        title: "Responsive & Engaging Designs",
        description: "Your website will adapt seamlessly to any device or screen size.",
        icon: defaultIcons.responsive
    },
    {
        title: "Optimized for Performance",
        description: "We focus on speed, smooth navigation, and user experience.",
        icon: defaultIcons.performance
    },
    {
        title: "Future-Ready Solutions",
        description: "Scalable designs that evolve with your business needs.",
        icon: defaultIcons.scalable
    }
];

const WhyChoose = ({
    tagline = "Creative & User-Centric Designs",
    title = "Why Choose Our Web Design Services?",
    description = (
        <>
            At <strong>TacTics Soft</strong>, we offer industry-relevant solutions tailored to enhance your digital presence and drive business success.
        </>
    ),
    featuresList = defaultFeatures
}) => {
    return (
        <section className="section why_choose">
            <div className="autoContent">
                <div className="why_choose_inner">
                    <div className="section_heading">
                        {tagline && <span data-aos="fade-up">{tagline}</span>}
                        {title && <h3 data-aos="fade-up">{title}</h3>}
                        <div className="section_heading_line" data-aos="fade-up"></div>
                        {description && typeof description === "string" ? (
                            <p data-aos="fade-up">{description}</p>
                        ) : (
                            <p data-aos="fade-up">{description}</p>
                        )}
                    </div>

                    <div className="feature_cards">
                        {featuresList.map((item, index) => (
                            <div className="feature_card" key={index} data-aos="fade-up">
                                <div className="feature_card_header">
                                    {item.icon && (
                                        <div className="feature_icon">
                                            {item.icon}
                                        </div>
                                    )}
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="feature_content">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;