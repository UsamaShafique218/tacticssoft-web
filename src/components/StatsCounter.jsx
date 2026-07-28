import React from "react"; 
 
const defaultStats = [
    {
        id: 1,
        number: "1K+",
        label: "100% Satisfied Clients" 
    },
    {
        id: 2,
        number: "1K+",
        label: "Projects Delivered"
    }
];

function StatsCounter({ data = defaultStats }) { 
    return (
        <div className="stats_counter_wrapper">
            {data.map((item, index) => (
                <div key={item.id || index} className="stat_item">
                    <h3 className="stat_number" data-aos="fade-up">{item.number}</h3>
                    <p className="stat_label" data-aos="fade-up">{item.label}</p>
                </div>
            ))}
        </div>
    );
}

export default StatsCounter;