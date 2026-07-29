import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
// import OurCourses from "../components/OurCourses";
import OurServices from "../components/OurServices";
import RequestQuote from "../components/RequestQuote";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
    <Banner />
    <Testimonial />
    <ChooseUs />
    <OurServices />
    {/* <OurCourses /> */}
    <AboutUs />
    <RequestQuote />
    </>
  );
}

export default Home;