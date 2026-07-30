import React, { useState, useEffect, useRef } from 'react';

function CustomDropdown({ options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="custom_dropdown_wrapper" ref={dropdownRef}>
      <div 
        className={`custom_dropdown_header ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
         
        <svg 
          className={`dropdown_arrow_icon ${isOpen ? 'rotate' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
 
      {isOpen && (
        <ul className="custom_dropdown_menu">
          <li 
            className={`dropdown_item ${value === '' ? 'selected' : ''}`}
            onClick={() => { onChange(''); setIsOpen(false); }}
          >
            {placeholder}
          </li>
          {options.map((option) => (
            <li 
              key={option.value} 
              className={`dropdown_item ${value === option.value ? 'selected' : ''}`}
              onClick={() => { onChange(option.value); setIsOpen(false); }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function JobFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const jobs = [
    // {
    //   id: 1,
    //   title: 'Business Developer',
    //   category: 'Business Developer',
    //   type: 'Full Time',
    //   link: '/job-details'
    // },
  ];

  const categoryOptions = [
    { label: 'Business Developer', value: 'Business Developer' },
    { label: 'Development', value: 'Development' },
    { label: 'Design', value: 'Design' },
  ];

  const typeOptions = [
    { label: 'Full Time', value: 'Full Time' },
    { label: 'Part Time', value: 'Part Time' },
    { label: 'Remote', value: 'Remote' },
  ];
 
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    const matchesType = selectedType ? job.type === selectedType : true;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="job_filter_wrapper"> 
      <div className="job_filter_bar" data-aos="fade-up"> 
        <div className="search_input_box">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
 
        <CustomDropdown 
          options={categoryOptions} 
          value={selectedCategory} 
          onChange={setSelectedCategory} 
          placeholder="All Job Category" 
        /> 
        <CustomDropdown 
          options={typeOptions} 
          value={selectedType} 
          onChange={setSelectedType} 
          placeholder="All Job Type" 
        />
      </div>
 
      <div className="job_cards_container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job_card" data-aos="fade-up">
              <h4 className="job_title">{job.title}</h4>
              <div className="job_card_right">
                <span className="job_category">{job.category}</span>
                <a href={job.link} className="more_details_btn">
                  More Details &rarr;
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no_jobs">No jobs found</p>
        )}
      </div>
    </div>
  );
}