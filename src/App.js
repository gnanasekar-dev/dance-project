import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// General Layouts
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import NotFound from './components/not-found/NotFound';
import AboutMe from './components/pages/AboutMe';
import Event from './components/pages/Event';
import Brochure from './components/pages/Brochure';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/event' element={<Event />} />
            <Route path='/brochure' element={<Brochure />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
