import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// General Layouts
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import NotFound from './components/not-found/NotFound';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Event from './components/pages/Event';
import Brochure from './components/pages/Brochure';
import Guru from './components/pages/Guru';
import Projects from './components/pages/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/event' element={<Event />} />
          <Route path='/brochure' element={<Brochure />} />
          <Route path='/guru' element={<Guru />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
