import { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Proof from './Proof'
import Services from './Services'
import Stack from './Stack'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

function App() {
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
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Proof />
      <Services />
      <Stack />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
