import React from "react";
import mainImgDefault from "../assets/images/Web-Design-3.png";
import overlapImgDefault from "../assets/images/Web-Dessign-4.png";
import StatsCounter from "./StatsCounter";
import CallActionBox from "./CallActionBox";
import { Link } from "react-router-dom";

function FeatureOverviewSection({
    tagline = "Web Design Services",
    title = "Custom Web Design Tailored to Your Business Needs",
    description = "Elevate your online presence with our professional web design services, ensuring an engaging and interactive digital experience that drives results.",
    mainImage = mainImgDefault,
    mainImageAlt = "TacTics Soft Office",
    overlapImage = overlapImgDefault,
    overlapImageAlt = "TacTics Soft Work",
    buttonText = "Request A Quote",
    buttonLink = "#",
    showStats = true,
    showCallAction = true,
    showButton = true,
    statsData, 
    callActionData  
}) { 
    return (
        <div className="section feature_sec feature_sec_reverse">
            <div className="autoContent">
                <div className="feature_sec_inner">
                    <div className="feature_sec_right">
                        <div className="group_img_wrapper" data-aos="fade-up">
                            <div className="main_img_wrapper">
                                <img
                                    src={mainImage}
                                    alt={mainImageAlt}
                                    className="main_img"
                                />
                            </div>
                            <div className="overlap_img_wrapper">
                                <img
                                    src={overlapImage}
                                    alt={overlapImageAlt}
                                    className="overlap_img"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature_sec_left">
                        <div className="section_heading">
                            {tagline && <span data-aos="fade-up">{tagline}</span>}
                            {title && <h3 data-aos="fade-up">{title}</h3>}
                            <div className="section_heading_line" data-aos="fade-up"></div>
                            {description && <p data-aos="fade-up">{description}</p>}
                        </div>  
                        
                        {showStats && <StatsCounter data={statsData} />}
                        {showCallAction && <CallActionBox data={callActionData} />}
                        
                        {showButton && (
                            <Link to={buttonLink} className="all_btn" data-aos="fade-up">
                                {buttonText}
                            </Link>
                        )}
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default FeatureOverviewSection;