import React, { useState } from "react";

const defaultFaqs = [
  {
    question: "How Long Does Web Design Take?",
    answer:
      "The timeline varies based on project complexity, but we ensure timely delivery without compromising quality.",
  },
  {
    question: "Why Is Responsive Web Design Important?",
    answer:
      "Responsive design ensures your website looks and functions perfectly on all devices, improving user experience and SEO.",
  },
  {
    question: "Can You Redesign an Existing Website?",
    answer:
      "Yes, we can completely redesign your existing website to improve aesthetics, functionality, and performance.",
  },
  {
    question: "Do You Provide Ongoing Support?",
    answer:
      "Absolutely. We offer ongoing maintenance and support packages to keep your website secure and up-to-date.",
  },
];

const FaqSection = ({
  tagline = "FAQS",
  title = "Frequently Asked Questions",
  faqsList = defaultFaqs,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section">
      <div className="autoContent">
        <div className="faq-section-inner">
          <div className="section_heading">
            {tagline && <span data-aos="fade-up">{tagline}</span>}
            {title && <h3 data-aos="fade-up">{title}</h3>}
            <div
              className="section_heading_line"
              data-aos="fade-up"
            ></div>
          </div>

          <div className="faq-list">
            {faqsList.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`faq-item ${isActive ? "active" : ""}`}
                > 
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-once="true"
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isActive}
                    >
                      <span className="faq-question-text">
                        {faq.question}
                      </span>

                      <span className="faq-icon">
                        {isActive ? (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        ) : (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        )}
                      </span>
                    </button>

                    <div className="faq-answer-wrapper">
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;