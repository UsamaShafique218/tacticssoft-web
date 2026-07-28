import { Routes, Route } from "react-router-dom"; 
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import './styles/App.css';
import './styles/responsive.css';
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import WebDesign from "./pages/services/WebDesign";
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import WebsiteMaintenanceSecurity from "./pages/services/WebsiteMaintenanceSecurity";
import SeoDigitalMarketing from "./pages/services/SeoDigitalMarketing";
import AiChatbot from "./pages/services/AiChatbot";
import GraphicBrandingDesign from "./pages/services/GraphicBrandingDesign";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import TrainingCourses from "./pages/services/TrainingCourses";
import WebDevelopment from "./pages/services/WebDevelopment";
import CoursesScreen from "./pages/CoursesScreen";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";



import AOS from "aos";
import "aos/dist/aos.css";




function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/website-maintenance-security" element={<WebsiteMaintenanceSecurity />} />
          <Route path="/seo-digital-marketing" element={<SeoDigitalMarketing />} />
          <Route path="/ai-chatbot" element={<AiChatbot />} />
          <Route path="/graphic-branding-design" element={<GraphicBrandingDesign />} />
          <Route path="/e-commerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/it-digital-skills-training-courses" element={<TrainingCourses />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/courses" element={<CoursesScreen />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          
          
          
          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;