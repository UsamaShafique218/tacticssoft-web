import { Link } from "react-router-dom";
import CallActionBox from "../components/CallActionBox";
import FeaturesList from "../components/FeaturesList";
import Testimonial from "../components/Testimonial";
import AboutCards from "../components/AboutCards";

function About() {
  return (
    <div className="about_us_wrapper">
      <div className="banner">
        <div className="autoContent">
          <div className="banner_inner">
            <div className="banner_heading">
              <h1 data-aos="fade-up">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section our_vision_sec">
        <div className="autoContent">
          <div className="our_vision_sec_inner">
            <div className="section_heading">
              {/* <span>About Us</span> */}
              <h3 data-aos="fade-up">Discover Our Company's Vision and Commitment to Excellence</h3>
              <div className="section_heading_line" data-aos="fade-up"></div>
              <p data-aos="fade-up">
                As a global leader in IT services, TacTics Soft caters to clients worldwide, transcending borders to deliver unparalleled solutions. Our operational model is rooted in proactive outsourced IT services, alongside comprehensive design, development, and management offerings, all delivered at competitive and consistent rates. Join us on a journey where technology meets innovation, and let TacTics Soft elevate your digital experience on a global scale.
              </p>
            </div>
            <FeaturesList />
            <CallActionBox />

            <Link to="javascript:void(0)" className="all_btn" data-aos="fade-up">
              Request A Quote
            </Link>
          </div>
        </div>
      </div>
      <AboutCards />

      <Testimonial />
    </div>

  );
}

export default About;