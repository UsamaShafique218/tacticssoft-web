import React from "react";


function FeaturesList() {
    const features = [
        "Top Rated",
        "Customer-Centric Focus",
        "Professional Staff",
        "Fair Prices",
    ];
    return (
        <div className="about_features">
            {features.map((feature, index) => (
                <div className="feature_item" key={index} data-aos="fade-up">
                    <i className="check_icon">
                        <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    <span>{feature}</span>
                </div>
            ))}
        </div>
    );
}

export default FeaturesList;