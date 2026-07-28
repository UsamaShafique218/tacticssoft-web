

function AboutCards() {
    return (
        <section className="section about_cards_sec">
            <div className="autoContent">
                <div className="cards_grid">
                    <div className="card" data-aos="fade-up">
                        <div className="card_header">
                            <div className="icon_wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="card_title">Who We Are</h3>
                        </div>
                        <p className="card_text">
                            TacticsSoft is a team of passionate web developers, app developers, and digital strategists committed to transforming ideas into impactful digital experiences. Our expertise spans various industries, enabling us to understand unique business challenges and create tailored solutions that meet specific needs. We pride ourselves on our collaborative approach, working closely with our clients to ensure their vision is realized through our technology.
                        </p>
                    </div>
                    <div className="card" data-aos="fade-up">
                        <div className="card_header">
                            <div className="icon_wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2v8" />
                                    <path d="m4.93 10.93 4.24 4.24" />
                                    <path d="M2 18h8" />
                                    <path d="M20 18h2" />
                                    <path d="m19.07 10.93-4.24 4.24" />
                                    <circle cx="12" cy="18" r="4" />
                                </svg>
                            </div>
                            <h3 className="card_title">Our Mission</h3>
                        </div>
                        <p className="card_text">
                            Our mission is to provide exceptional web and app development services that enhance operational efficiency, foster innovation, and drive business success. We aim to be a trusted partner for businesses, helping them navigate the complexities of the digital world and achieve their strategic goals through tailored, cutting-edge solutions that deliver measurable results, foster long-term growth, and empower them to stay ahead in a competitive market.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCards;