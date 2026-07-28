import React from 'react'; 
import JobFilter from './JobFilter';
 
 
function Join() {
  return (
    <section className="section join_sec">
      <div className="autoContent">
        <div className="join_sec_inner">
          <div className="section_heading">
            <span data-aos="fade-up">Join TacTics Soft</span>
            <h3 data-aos="fade-up">Build Your POWERFUL CAREER</h3>
            <div className="section_heading_line" data-aos="fade-up"></div>
            <p data-aos="fade-up">Join TacTics Soft and take your career to the next level! We are always looking for passionate, innovative, and talented individuals to be part of our growing team. Whether you’re an experienced professional or a fresh talent, we provide opportunities to grow, learn, and make an impact in the tech industry.</p>
          </div> 

          <JobFilter />
 
        </div>
      </div>
    </section>
  );
}

export default Join;