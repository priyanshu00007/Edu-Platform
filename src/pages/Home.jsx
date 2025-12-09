import React from 'react';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

const Home = ({ setActiveTab, darkMode }) => {
    return (
        <>
            <Hero setActiveTab={setActiveTab} darkMode={darkMode} />
            <MissionSection darkMode={darkMode} />
            <TestimonialsSection darkMode={darkMode} />
            <FAQSection darkMode={darkMode} />
        </>
    );
};

export default Home;