import AboutUs from "../components/AboutUs";
import Join from "../components/Join"; 
 
function Careers() {
  return (
    <div className="careers_wrapper">
      <div className="banner">
        <div className="autoContent">
          <div className="banner_inner">
            <div className="banner_heading">
              <h1 data-aos="fade-up">Careers</h1>
            </div>
          </div>
        </div>
      </div> 
      <Join />
      <AboutUs />
    </div>

  );
}

export default Careers;