import React, { useState } from 'react';

const JobDetailsPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null,
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted Data:', formData);
        alert('Application Submitted Successfully!');
    };

    return (
        <div className="job_page_container">
            <div className='autoContent'>
                <div className="job_layout">

                    <div className="job_details">
                        <h1 className="job_title">Business Developer</h1>

                        <div className="job_meta">
                            <p><strong>Job Category:</strong> Business Developer</p>
                            <p><strong>Job Type:</strong> Full Time, Part Time</p>
                        </div>

                        <h2 className="section_title">Description</h2>

                        <div className="job_description">
                            <p>
                                🚀 <strong>We're Hiring:</strong> Business Development Executive (Freelancer Platforms & Lead Generation) 🎯
                            </p>
                            <p>💡 <strong>Job Type:</strong> Remote / Full-Time / Part-Time</p>
                            <p>💼 <strong>Experience:</strong> 6 Months – 2 Years</p>

                            <p style={{ fontWeight: 'bold', marginTop: '15px' }}>📊 Skills & Responsibilities:</p>

                            <ul className="skills_list">
                                <li>
                                    <span>✅</span>
                                    <span><strong>Freelancer & Upwork Bidding</strong> – Writing winning proposals, strategic bidding & closing deals</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Lead Generation & Email Marketing</strong> – Finding high-quality leads through LinkedIn, cold emails & outreach campaigns</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Market Research & Competitor Analysis</strong> – Identifying business opportunities & targeting the right audience</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Client Communication & Negotiation</strong> – Converting leads into long-term clients with strong sales skills</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>CRM & Sales Strategy</strong> – Managing leads, nurturing prospects & improving conversion rates</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Proposal Writing & Presentations</strong> – Creating compelling proposals tailored to client needs</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Social Media Outreach & LinkedIn Sales Navigator</strong> – Generating leads through networking & personal branding</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Cold Calling & Follow-Ups</strong> – Engaging potential clients and ensuring follow-ups for deal closures</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Affiliate & Partnership Development</strong> – Collaborating with industry professionals for client referrals</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Digital Marketing Knowledge</strong> – Understanding SEO, PPC & content marketing for lead generation</span>
                                </li>
                                <li>
                                    <span>✅</span>
                                    <span><strong>Building Client Relationships</strong> – Ensuring customer satisfaction and repeat business</span>
                                </li>
                            </ul>

                            <div className="job-overview">
                                <strong>🔹 Job Overview:</strong>
                                <p style={{ marginTop: '5px' }}>
                                    We are looking for a proactive Business Development Executive with expertise in acquiring clients via Freelancer, Upwork, Fiverr, LinkedIn, Cold Emailing, and Social Media Outreach. The ideal candidate should have a sales-driven mindset, strong negotiation skills, and a passion for growth.
                                </p>
                            </div>
                        </div>
                    </div>
 
                    <div className="job_form_card">
                        <h2 className="section_title" style={{ marginTop: 0 }}>Apply for this position</h2>

                        <form onSubmit={handleSubmit}> 
                            <div className="form_group">
                                <label className="form_label">
                                    Full Name <span className="required-star">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="form_input"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div> 
                            <div className="form_group">
                                <label className="form_label">
                                    Email <span className="required-star">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="form_input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div> 
                            <div className="form_group">
                                <label className="form_label">
                                    Phone <span className="required-star">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="form_input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
 
                            <div className="form_group">
                                <label className="form_label">
                                    Cover Letter <span className="required-star">*</span>
                                </label>
                                <textarea
                                    name="coverLetter"
                                    rows="5"
                                    required
                                    className="form_textarea"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Upload Resume */}
                            <div className="form_group">
                                <label className="form_label">
                                    Upload CV/Resume <span className="required-star">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    required
                                    className="file_input"
                                    onChange={handleChange}
                                />
                                <span className="file-hint">
                                    Allowed Type(s): .pdf, .doc, .docx
                                </span>
                            </div>
 
                            <div className="form_group checkbox-group">
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    id="agreeTerms"
                                    required
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="checkbox-input"
                                />
                                <label htmlFor="agreeTerms" className="checkbox-label">
                                    By using this form you agree with the storage and handling of your data by this website. <span className="required-star">*</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div style={{ marginTop: '15px' }}>
                                <button type="submit" className="all_btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobDetailsPage;