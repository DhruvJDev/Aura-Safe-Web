import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import Features from './components/Features';
import Download from './components/Download';
import Stats from './components/Stats';
import Footer from './components/Footer';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import Support from './pages/Support';
import './styles.css';
import { useEffect } from 'react';

function AppContent()
{
    const location = useLocation();

    useEffect(() =>
    {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) =>
        {
            entries.forEach(entry =>
            {
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.25 });

        sections.forEach(s => observer.observe(s));

        return () => observer.disconnect();
    }, [location.pathname]);

    useEffect(() =>
    {
        const scrollTo = location.state?.scrollTo;

        if (location.pathname === '/' && scrollTo)
        {
            window.requestAnimationFrame(() =>
            {
                const element = document.getElementById(scrollTo);
                if (element)
                {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname, location.state]);

    useEffect(() =>
    {
        const onScroll = () =>
        {
            const header = document.querySelector('.site-header');
            if (!header) return;
            if (window.scrollY > 60) header.classList.add('header--scrolled');
            else header.classList.remove('header--scrolled');
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <AppPreview />
                        <Features />
                        <Stats />
                        <Download />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/support" element={<Support />} />
            </Routes>
            <Footer />
        </>
    );
}

function App()
{
    return (
        <BrowserRouter>
            <div className="App">
                <AppContent />
            </div>
        </BrowserRouter>
    );
}

export default App;
