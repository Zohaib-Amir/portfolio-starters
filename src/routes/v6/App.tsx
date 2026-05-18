import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './v6.css'
import Hero from './Hero'
import CaseStudies from './CaseStudies'
import Services from './Services'
import Stack from './Stack'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

function V6App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="v6-scope min-h-screen bg-bg text-text">
      <Hero />
      <CaseStudies />
      <Services />
      <Stack />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<V6App />} />
    </Routes>
  )
}
