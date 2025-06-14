import React, { useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <main className='bg-gray-950'>
      <Hero/>
      <About/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
