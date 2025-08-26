import { React, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './header.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import { AnimatePresence } from 'framer-motion';

function AnimateRoutes() {
  const location = useLocation();
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 flex flex-col font-sacheon justify-center items-center bg-gradient-to-br from-gray-600 to-gray-800'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
    </>
  )
}

export default function App() {
  return (
    <>
    <BrowserRouter>
      <AnimateRoutes />
    </BrowserRouter>
    </>
  )
}
