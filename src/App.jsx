import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about" style={{ backgroundColor: '#F1F5F9' }}><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects" style={{ backgroundColor: '#F1F5F9' }}><Projects /></section>
        <Skills />
        <Certifications />
        <section id="contact" style={{ backgroundColor: '#F1F5F9' }}><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
