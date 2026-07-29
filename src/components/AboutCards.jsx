

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
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2L12 22" />
                                    <path d="M5 9L12 2L19 9" />
                                    <path d="M5 9H19" />
                                    <path d="M7 9V15C7 17.2 9.2 19 12 19C14.8 19 17 17.2 17 15V9" />
                                    <circle cx="12" cy="9" r="2" />
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