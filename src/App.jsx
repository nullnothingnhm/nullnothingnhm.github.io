import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LabEnvironment from './components/LabEnvironment'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LabEnvironment />
      <Experience />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App