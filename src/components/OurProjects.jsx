import React from 'react'; 

import our_project_img1 from "../assets/images/our_project_img1.png"
import our_project_img2 from "../assets/images/our_project_img2.png"
import our_project_img3 from "../assets/images/our_project_img3.png"
import our_project_img4 from "../assets/images/our_project_img4.png"
import our_project_img5 from "../assets/images/our_project_img5.png"
import our_project_img6 from "../assets/images/our_project_img6.png"
import our_project_img7 from "../assets/images/our_project_img7.png"
import our_project_img8 from "../assets/images/our_project_img8.png"
import our_project_img9 from "../assets/images/our_project_img9.png"
import our_project_img10 from "../assets/images/our_project_img10.png"
import our_project_img11 from "../assets/images/our_project_img11.png"
import our_project_img12 from "../assets/images/our_project_img12.png"
import our_project_img13 from "../assets/images/our_project_img13.png"
import our_project_img14 from "../assets/images/our_project_img14.png"
import our_project_img15 from "../assets/images/our_project_img15.png"
import our_project_img16 from "../assets/images/our_project_img16.png"
import our_project_img17 from "../assets/images/our_project_img17.png"
import our_project_img18 from "../assets/images/our_project_img18.png"
import our_project_img19 from "../assets/images/our_project_img19.png"
import our_project_img20 from "../assets/images/our_project_img20.png"
import our_project_img21 from "../assets/images/our_project_img21.png"


const projectsData = [
  {
    id: 1,
    category: 'CRM',
    title: 'ASP.Net project',
    image: our_project_img1,  
    link: '/'
  },
  {
    id: 2,
    category: 'Design',
    title: 'Mobile App Design',
    image: our_project_img2,
    link: '/'
  },
  {
    id: 3,
    category: 'Design',
    title: 'Direct Shop App',
    image: our_project_img3,
    link: '/'
  },
  {
    id: 4,
    category: 'Website',
    title: 'Jamaicataxi',
    image: our_project_img4,
    link: '/'
  },
  {
    id: 5,
    category: 'Website',
    title: 'Moda finilxp',
    image: our_project_img5,
    link: '/'
  },
  {
    id: 6,
    category: 'Website',
    title: 'Mualij Website',
    image: our_project_img6,
    link: '/'
  },
  {
    id: 7,
    category: 'Website',
    title: 'Treat House',
    image: our_project_img7,
    link: '/'
  },
  {
    id: 8,
    category: 'Website',
    title: 'Treat House',
    image: our_project_img8,
    link: '/'
  },
  {
    id: 9,
    category: 'Website',
    title: 'Survey Site Design',
    image: our_project_img9,
    link: '/'
  },
  {
    id: 10,
    category: 'Website',
    title: 'iLearning',
    image: our_project_img10,
    link: '/'
  },
  {
    id: 11,
    category: 'Mobile App',
    title: 'FreeMe Feetrak',
    image: our_project_img11,
    link: '/'
  },
  {
    id: 12,
    category: 'Mobile App',
    title: 'Deebrah',
    image: our_project_img12,
    link: '/'
  },
  {
    id: 13,
    category: 'Website',
    title: 'Food Drive',
    image: our_project_img13,
    link: '/'
  },
  {
    id: 14,
    category: 'Mobile App',
    title: 'Event App',
    image: our_project_img14,
    link: '/'
  },
  {
    id: 15,
    category: 'Website',
    title: 'Bitcoin blog',
    image: our_project_img15,
    link: '/'
  },
  {
    id: 16,
    category: 'Website',
    title: 'Vouch App',
    image: our_project_img16,
    link: '/'
  },
  {
    id: 17,
    category: 'Mobile App',
    title: 'Shopl app',
    image: our_project_img17,
    link: '/'
  },
  {
    id: 18,
    category: 'Website',
    title: 'Luckyx3',
    image: our_project_img18,
    link: '/'
  },
  {
    id: 19,
    category: 'Website',
    title: 'BlockChain Website',
    image: our_project_img19,
    link: '/'
  },
  {
    id: 20,
    category: 'Website',
    title: 'Urban Harvest',
    image: our_project_img20,
    link: '/'
  },
  {
    id: 21,
    category: 'Website',
    title: 'Kaymu',
    image: our_project_img21,
    link: '/'
  },
];

function OurProjects() {
  return (
    <section className="section our_projects_sec">
      <div className="autoContent">
        <div className="our_projects_sec_inner">
          <div className="section_heading">
            <span>Our Portfolio</span>
            <h3>Explore Our Work</h3>
            <div className="section_heading_line"></div>
          </div>

          <div className="our_projects_list">
            {projectsData.map((project) => (
              <div key={project.id} className="project_card" data-aos="fade-up">
                <a href={project.link} className="project_image_wrapper">
                  <img src={project.image} alt={project.title} />
                  
                  {/* Overlay & Hover Circle Arrow */}
                  <div className="project_overlay">
                    <div className="arrow_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Bottom Floating Info Card */}
                <div className="project_info">
                  <span className="project_category">{project.category}</span>
                  <h4 className="project_title">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;