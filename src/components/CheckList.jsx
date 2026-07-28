import React from "react";
 
const defaultItems = [
    {
        title: "Turn Vision into Reality",
        description: "We craft visually stunning and functional websites that bring your ideas to life, ensuring a seamless digital presence."
    },
    {
        title: "Enhance User Experience",
        description: "Our designs focus on intuitive navigation and aesthetics, providing users with an engaging and effortless browsing experience."
    }
];

function CheckList({ items = defaultItems }) {
    return (
        <div className="check_list_wrapper">
            {items.map((item, index) => (
                <div className="check_list" key={index}>
                    <div className="check_list_header" data-aos="fade-up">
                        <div className="box_icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 12L10 17L19 8"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h5>{item.title}</h5>
                    </div>
                    <div className="check_list_content" data-aos="fade-up">
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CheckList;