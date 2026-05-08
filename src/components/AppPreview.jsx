import React, { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import homePage from '../assets/home_page.png';
import settingPage from '../assets/setting_page.png';
import contactPage from '../assets/contact_page.png';

const previews = [
    {
        image: homePage,
        title: 'Home Screen',
        description: 'The main dashboard where users can quickly access emergency features, view their safety status, and see recent activity at a glance.'
    },
    {
        image: contactPage,
        title: 'Contact Screen',
        description: 'Your trusted contacts list with options to add, edit, and manage emergency contacts easily.'
    },
    {
        image: settingPage,
        title: 'Settings View',
        description: 'Customize your safety preferences, manage notifications, and configure app settings for a personalized experience.'
    },
];

const AppPreview = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const PreviewCard = ({ item, index }) => (
        <article className="preview-card" style={{ '--i': index }}>
            <div className="phone-frame">
                <div className="phone-screen">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="phone-notch" aria-hidden="true" />
            </div>
            <div className="preview-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </article>
    );

    return (
        <section id="preview" className="app-preview animate-stagger">
            <div className="app-preview-container">
                <h2 className="section-title">
                    See the App in <span className="highlight">Action</span>
                </h2>
                <p className="app-preview-subtitle">
                    These screens show what users experience when they open Aura Safe.
                </p>
                {isMobile ? (
                    <Swiper
                        className="preview-swiper"
                        modules={[Autoplay, Navigation, Pagination]}
                        loop
                        centeredSlides
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {previews.map((item, index) => (
                            <SwiperSlide key={item.title}>
                                <div className="preview-card--swiper">
                                    <PreviewCard item={item} index={index} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="app-preview-grid">
                        {previews.map((item, index) => (
                            <PreviewCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AppPreview;
