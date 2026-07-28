import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
 
import client1Img from '../assets/images/client_img1.png';

function TestimonialSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Atasi C.",
            role: "Client",
            image: client1Img,
            review: "Tactics Soft transformed our website with a sleek, modern design. Their expertise ensured a seamless and engaging user experience!"
        },
        {
            id: 2,
            name: "Miaro R.",
            role: "Client",
            image: client1Img,
            review: "Their SEO strategies helped us rank higher on search engines fast. We saw a significant boost in traffic and increased conversions!"
        },
        {
            id: 3,
            name: "Antony Patrick N.",
            role: "Client",
            image: client1Img,
            review: "Outstanding web development services delivered a high-performance site. Their team ensured responsiveness and smooth functionality!"
        },
        {
            id: 4,
            name: "Sebastian J.",
            role: "Client",
            image: client1Img,
            review: "Tactics Soft's digital marketing expertise helped us attract new clients. Our brand visibility and online engagement skyrocketed!"
        },
        {
            id: 5,
            name: "William J.",
            role: "Client",
            image: client1Img,
            review: "They designed a user-friendly mobile app that improved customer experience. The app's smooth performance enhanced user satisfaction!"
        },
        {
            id: 6,
            name: "Bragi M.",
            role: "Client",
            image: client1Img,
            review: "Exceptional branding services crafted a unique identity for our brand. Their creative vision perfectly aligned with our company goals!"
        },
        {
            id: 7,
            name: "Megan E.",
            role: "Client",
            image: client1Img,
            review: "Tactics Soft developed a scalable and custom software solution for us. Their technical proficiency optimized our business operations!"
        },
        {
            id: 8,
            name: "Kevin T.",
            role: "Client",
            image: client1Img,
            review: "Their e-commerce solutions made our online store more efficient and smooth. We saw a major increase in sales and customer retention!"
        },
        {
            id: 9,
            name: "John K.",
            role: "Client",
            image: client1Img,
            review: "The AI chatbot they built enhanced customer support and engagement. It provides quick, smart responses for seamless interactions!"
        },
        {
            id: 10,
            name: "John A.",
            role: "Client",
            image: client1Img,
            review: "Their website maintenance services keep our platform secure and fast. Regular updates ensure smooth performance and reliability!"
        },
        {
            id: 11,
            name: "James N.",
            role: "Client",
            image: client1Img,
            review: "Their front-end development expertise ensured a stunning, responsive site. Visitors love the sleek design and seamless navigation!"
        },
         
    ];

    return (
        <div className="testimonial_slider_wrapper" data-aos="fade-up"> 
            <button ref={prevRef} className="custom_swiper_btn custom_prev_btn" aria-label="Previous">
                &#10094;
            </button> 
            <button ref={nextRef} className="custom_swiper_btn custom_next_btn" aria-label="Next">
                &#10095;
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                slidesPerGroup={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="testimonial_swiper"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial_card">
                            <div className="card_header">
                                <div className="client_img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="client_info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                            <p className="client_review">{item.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </div>
    );
}

export default TestimonialSlider;