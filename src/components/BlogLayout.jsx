import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogLayout = ({
  breadcrumbLinks = [],
  leftContent,
  middleContent,
  rightContent,
}) => {

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY >= 900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="blogs_content_sec_wrapper">
      <div className="autoContent">

        <div className="blogs_sec_header">
          <div className="breadcrumb">
            {breadcrumbLinks.map((item, index) => (
              <React.Fragment key={index}>
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumbLinks.length - 1 && " > "}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="blog_detail_content">

          <aside className={`blog_details_left ${fixed ? "fixed_sidebar" : ""}`}>
            {leftContent}
          </aside>

          <main className="blog_details_middle">
            {middleContent}
          </main>

          <aside className={`blog_details_right ${fixed ? "fixed_sidebar" : ""}`}>
            {rightContent}
          </aside>

        </div>

      </div>
    </div>
  );
};

export default BlogLayout;