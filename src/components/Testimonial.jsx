import TestimonialSlider from "./TestimonialSlider";

function Testimonial() {
  return (
    <div className="section testimonial_sec">
        <div className="autoContent">
            <div className="testimonial_sec_inner">
                <div className="section_heading">
                    <span data-aos="fade-up">Testimonial</span>
                    <h3 data-aos="fade-up">See What Our Clients Say About Our Digital Services</h3>
                    <div className="section_heading_line" data-aos="fade-up"></div>
                </div>
                <TestimonialSlider />
            </div>
        </div> 
    </div>
  );
}

export default Testimonial;