import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog_img1 from "../assets/images/blog_img1.png"
// import blog_img2 from "../assets/images/blog_img2.png"



const categoriesList = [
    "All", "IT", "Services", "AI/ML", "Mobile",
    "Web", "Ecommerce", "Shopify", "UI/UX", "Blockchain"
];

const initialBlogs = [
    {
        id: 1,
        title: "Blog5",
        category: "IT",
        readTime: "5 MIN READ",
        image: blog_img1, 
        link: "#"
    },
    {
        id: 2,
        title: "AI Chatbot Development: Build Bots That Scale Your Business",
        category: "AI/ML",
        readTime: "5 MIN READ",
        image: blog_img1, 
        link: "#"
    }, 
];

function Blogs() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
 
    const filteredBlogs = initialBlogs.filter((blog) => {
        const matchesCategory =
            activeCategory === "All" || blog.category.toLowerCase() === activeCategory.toLowerCase();
        const matchesSearch =
            blog.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blogs_wrapper"> 
            <div className="banner">
                <div className="autoContent">
                    <div className="banner_inner">
                        <div className="banner_heading">
                            <strong data-aos="fade-up">Tacticssoft Blogs</strong>
                            <h1 data-aos="fade-up">Blogs, Insights, and Guides for Tech Professionals</h1>
                        </div>
 
                        <div className="blogs_names">
                            <ul>
                                {categoriesList.map((cat, index) => (
                                    <li key={index} data-aos="fade-up">
                                        <button
                                            className={`blog_pill_btn ${activeCategory === cat ? "active" : ""}`}
                                            onClick={() => setActiveCategory(cat)}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="blogs_content_sec">
                <div className="autoContent"> 
                    <div className="blogs_sec_header">
                        <div className="breadcrumb" data-aos="fade-up">
                            <Link to="/">Home</Link> &gt; <span>Blog</span>
                        </div>
                        <div className="blog_search_box" data-aos="fade-up">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
 
                    <div className="blogs_grid">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog) => (
                                <div key={blog.id} className="blog_card" data-aos="fade-up">
                                    <div className="blog_card_img">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="blog_card_body">
                                        <span className="blog_card_category">{blog.category}</span>
                                        <h3 className="blog_card_title">{blog.title}</h3>
                                        <div className="blog_card_footer">
                                            <Link to={blog.link} className="read_more">
                                                READ MORE &rarr;
                                            </Link>
                                            <span className="read_time">{blog.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no_blogs_msg" data-aos="fade-up">No blogs found in this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;