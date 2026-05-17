import { Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import Workflows from './Workflows'
import Stack from './Stack'
import CaseStudies from './CaseStudies'
import Contact from './Contact'
import Footer from './Footer'

function V4App() {
  return (
    <div className="min-h-screen bg-bg text-text">
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
