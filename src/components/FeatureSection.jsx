import React from "react";
import mainImgDefault from "../assets/images/Web-Design-1.png";
import overlapImgDefault from "../assets/images/Web-Dessign-2.png";
import CheckList from "./CheckList";

function FeatureSection({
    tagline = "Web Design Services",
    title = "Creating Stunning, User-Friendly, and High-Performing Websites",
    description,
    mainImage = mainImgDefault,
    mainImageAlt = "TacTics Soft Office",
    overlapImage = overlapImgDefault,
    overlapImageAlt = "TacTics Soft Work",
    checkListItems  
}) {
    return (
        <div className="section feature_sec">
            <div className="autoContent">
                <div className="feature_sec_inner">
                    <div className="feature_sec_left">
                        <div className="section_heading">
                            {tagline && <span data-aos="fade-up">{tagline}</span>}
                            {title && <h3 data-aos="fade-up">{title}</h3>}
                            <div className="section_heading_line" data-aos="fade-up"></div>

                            {description ? (
                                <p data-aos="fade-up">{description}</p>
                            ) : (
                                <p data-aos="fade-up">
                                    At <strong>TacTics Soft</strong>, we specialize in crafting visually appealing and highly functional websites that captivate users and enhance brand identity. Our expert designers focus on seamless navigation, responsive layouts, and engaging visuals to create a website that leaves a lasting impression.
                                </p>
                            )}
                        </div>
                        <CheckList items={checkListItems} />
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;