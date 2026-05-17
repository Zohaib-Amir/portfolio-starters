import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Proof from './components/Proof'
import Services from './components/Services'
import Stack from './components/Stack'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-bg text-text scan-line">
      <Navbar />
      <Hero />
      <Terminal />
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
