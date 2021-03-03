import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingSection from './section/LandingSection';
import AboutSection from './section/AboutSection';
import WorkSection from './section/WorkSection';
import ContactSection from './section/ContactSection';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <LandingSection />
    <AboutSection />
    <WorkSection />
    <ContactSection />
  </React.StrictMode>,
  document.getElementById('root')
);
