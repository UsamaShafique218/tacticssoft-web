import OurProjects from "../components/OurProjects";

 
function Portfolio() {
  return (
    <div className="portfolio_wrapper">
      <div className="banner">
        <div className="autoContent">
          <div className="banner_inner">
            <div className="banner_heading">
              <h1 data-aos="fade-up">Our Portfolio</h1>
            </div>
          </div>
        </div>
      </div> 
      <OurProjects />
    </div>

  );
}

export default Portfolio;