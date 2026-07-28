import CtaBanner from "../../components/CtaBanner";
import FeatureOverviewSection from "../../components/FeatureOverviewSection";
import FeatureSection from "../../components/FeatureSection"; 
import cts_bg_img1 from "../../assets/images/cta_bg_img1.png";
import WhyChoose from "../../components/WhyChoose";
import FaqSection from "../../components/FaqSection";



function WebDesign() {
  return (
    <div className="web_design_wrapper">
      <div className="banner">
        <div className="autoContent">
          <div className="banner_inner">
            <div className="banner_heading">
              <h1 data-aos="fade-up">Web Design</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeatureSection />
        <FeatureOverviewSection />

        <CtaBanner
          subtitle="Website Design"
          title="Ready Work Together to Design a Website?"
          buttonText="Contact Us Today"
          backgroundImage={cts_bg_img1} 
        />

        <WhyChoose />
        <FaqSection />
      </div>
    </div>

  );
}

export default WebDesign;