import { useEffect } from 'react'
import './v1.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from './Marquee'
import About from './About'
import Services from './Services'
import Expertise from './Expertise'
import CaseStudies from './CaseStudies'
import CTA from './CTA'
import Footer from './Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="v1-scope min-h-screen bg-bg text-text grain">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Expertise />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
