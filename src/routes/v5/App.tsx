import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './v5.css'
import Hero from './Hero'
import Process from './Process'
import Proof from './Proof'
import Stack from './Stack'
import Contact from './Contact'
import Footer from './Footer'

export default function V5App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="v5-scope min-h-screen bg-bg text-text font-sans selection:bg-accent/20">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Process />
            <Proof />
            <Stack />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}
