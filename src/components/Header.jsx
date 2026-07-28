import { useState, useEffect } from "react";
import logo from "../assets/images/tactic-white.png";
import black_logo from "../assets/images/tactics-black.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false); // Mobile dropdown state
 
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
 
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("isOpenMenu");
        } else {
            document.body.classList.remove("isOpenMenu");
        }
        return () => document.body.classList.remove("isOpenMenu");
    }, [isMenuOpen]);

    const closeAll = () => {
        setIsMenuOpen(false);
        setServiceOpen(false);
    };

    return (
        <>
            <header className={`header ${isSticky ? "sticky" : ""}`}>
                <div className="autoContent">
                    <div className="header_inner">
                        <div className="header_left">
                            <div className="logo">
                                <Link to="/" className="header_logo">
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="header_right">
                            <div className="header_links">
                                <ul>
                                    <li><NavLink to="/" onClick={closeAll}>Home</NavLink></li>
                                    <li><NavLink to="/about" onClick={closeAll}>About Us</NavLink></li>
                                    <li className="has_dropdown">
                                        <NavLink to="javascript:void(0)" className="dropdown_toggle">
                                        Services
                                    </NavLink>
                                        <div className="dropdown_menu mega_menu">
                                            <div className="autoContent">
                                                <div className="mega_menu_inner">
                                                    <div className="mega_col mega_brand">
                                                        <img src={black_logo} alt="Tactics Soft" className="mega_logo" />
                                                    </div>
                                                    <div className="mega_col mega_links">
                                                        <ul>
                                                            <li><Link to="/web-design" onClick={closeAll}>Web Design</Link></li>
                                                            <li><Link to="/web-development" onClick={closeAll}>Web Development</Link></li>
                                                            <li><Link to="/seo-digital-marketing" onClick={closeAll}>SEO & Digital Marketing</Link></li>
                                                            <li><Link to="/graphic-branding-design" onClick={closeAll}>Graphic & Branding Design</Link></li>
                                                            <li><Link to="/mobile-app-development" onClick={closeAll}>Mobile App Development</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega_col mega_links">
                                                        <ul>
                                                            <li><Link to="/custom-software-development" onClick={closeAll}>Custom Software Development</Link></li>
                                                            <li><Link to="/website-maintenance-security" onClick={closeAll}>Website Maintenance & Security</Link></li>
                                                            <li><Link to="/ai-chatbot" onClick={closeAll}>AI & Chatbot Solutions</Link></li>
                                                            <li><Link to="/e-commerce-solutions" onClick={closeAll}>E-Commerce Solutions</Link></li>
                                                            <li><Link to="/it-digital-skills-training-courses" onClick={closeAll}>IT & Digital Skills Training Courses</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><NavLink to="/our-portfolio" onClick={closeAll}>Portfolio</NavLink></li>
                                    <li><NavLink to="/blog" onClick={closeAll}>Blog</NavLink></li>
                                    <li><NavLink to="/careers" onClick={closeAll}>Careers</NavLink></li>
                                    <li><NavLink to="/contact" onClick={closeAll}>Contact Us</NavLink></li>
                                </ul>
                            </div>

                            <div className="header_btn">
                                <a href="#" className="all_btn navLink">Free Quote</a>
                            </div>
                        </div>
 
                        <div
                            className={`mob_menuBtn hamburger-lines ${isMenuOpen ? "active open" : ""}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                    </div>
                </div>
            </header>
 
            <div
                className={`mobile_overlay ${isMenuOpen ? "active" : ""}`}
                onClick={closeAll}
            ></div>
 
            <div className={`mobile_sidebar ${isMenuOpen ? "active" : ""}`}>
                <div className="mobile_sidebar_top">
                    <img src={black_logo} alt="Tactics Soft" className="mobile_logo" />
                    <button className="close_btn" onClick={closeAll}>✕</button>
                </div>

                <ul className="mobile_menu_list">
                    <li>
                        <NavLink to="/" onClick={closeAll}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={closeAll}>About Us</NavLink>
                    </li>
 
                    <li className={`has_mobile_dropdown ${serviceOpen ? "open" : ""}`}>
                        <div className="mobile_dropdown_head">
                            <NavLink to="javascript:void(0)"  className="nav_title" onClick={() => setServiceOpen(!serviceOpen)}>Services</NavLink>
                            
                            <span className="arrow_btn" >
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>

                        <ul className="mobile_dropdown">
                            <li><Link to="/web-design" onClick={closeAll}>Web Design</Link></li>
                            <li><Link to="/web-development" onClick={closeAll}>Web Development</Link></li>
                            <li><Link to="/seo-digital-marketing" onClick={closeAll}>SEO & Digital Marketing</Link></li>
                            <li><Link to="/graphic-branding-design" onClick={closeAll}>Graphic & Branding Design</Link></li>
                            <li><Link to="/mobile-app-development" onClick={closeAll}>Mobile App Development</Link></li>
                            <li><Link to="/custom-software-development" onClick={closeAll}>Custom Software Development</Link></li>
                            <li><Link to="/website-maintenance-security" onClick={closeAll}>Website Maintenance & Security</Link></li>
                            <li><Link to="/ai-chatbot" onClick={closeAll}>AI & Chatbot Solutions</Link></li>
                            <li><Link to="/e-commerce-solutions" onClick={closeAll}>E-Commerce Solutions</Link></li>
                            <li><Link to="/it-digital-skills-training-courses" onClick={closeAll}>IT & Digital Skills Training Courses</Link></li>
                        </ul>
                    </li>

                    <li><NavLink to="/our-portfolio" onClick={closeAll}>Portfolio</NavLink></li>
                    <li><NavLink to="/blog" onClick={closeAll}>Blog</NavLink></li>
                    <li><NavLink to="/careers" onClick={closeAll}>Careers</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeAll}>Contact Us</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default Header;