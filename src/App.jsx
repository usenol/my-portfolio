import React, { useEffect} from 'react'
import Hero from './components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <main className='bg-gray-950'>
      <Hero/>
    </main>
  )
}

export default App
