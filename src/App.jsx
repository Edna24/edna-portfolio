
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Studio from './pages/Studio'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import FeaturedProjects from './components/FeaturedProjects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MyStory from './pages/MyStory'
import TreasuryCaseStudy from './pages/TreasuryCaseStudy'

import './App.css'

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <WhatIDo />
        <FeaturedProjects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<MyStory />} />
        <Route
          path="/projects/treasury-capstone"
          element={<TreasuryCaseStudy />}
        />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
