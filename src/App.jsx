import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Stats from './components/Stats';
import Footer from './components/Footer';
import './styles.css';

function App()
{
    return (
        <div className="App">
            <Header />
            <Hero />
            <Features />
            <Stats />
            <Download />
            <Footer />
        </div>
    );
}

export default App;
