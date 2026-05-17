import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './v4.css'
import Hero from './Hero'
import Workflows from './Workflows'
import Stack from './Stack'
import CaseStudies from './CaseStudies'
import Contact from './Contact'
import Footer from './Footer'

function V4App() {
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
    <div className="v4-scope min-h-screen bg-bg text-text">
      <Hero />
      <Workflows />
      <Stack />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<V4App />} />
    </Routes>
  )
}
