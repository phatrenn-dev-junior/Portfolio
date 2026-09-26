import React from 'react'
import './index.css' // Importing the CSS file
import Navbar from './conponents/Navbar'
import Footer from './conponents/Footer'
import Hero from './conponents/Hero'
import { Skills } from './conponents/Skills'
import AbouteMe from './conponents/AbouteMe'
import ContactMe from './conponents/ContactMe'


const App = () => {
  return (
    <>
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
     <AbouteMe/>
      <Skills />
      {/* <Projects /> */}
      <ContactMe />
      <Footer />
      {/* <Toaster theme="dark" /> */}
    </div>
    </>
  )
}

export default App