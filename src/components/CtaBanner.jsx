import React from 'react'; 

const CtaBanner = ({
  subtitle = "Website Design",
  title = "Ready Work Together to Design a Website?",
  buttonText = "Contact Us Today",
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <section 
      className="section cta-banner"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
      }}
    > 
      <div className="cta-overlay"></div>

      <div className="cta-container autoContent">
        <div className="cta-content">
          {subtitle && <span className="cta-subtitle" data-aos="fade-up">{subtitle}</span>}
          {title && <h2 className="cta-title" data-aos="fade-up">{title}</h2>}
        </div>

        <div className="cta-action">
          <button className="all_btn" data-aos="fade-up">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;