
import './App.css'
import AboutMe from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Project'
import LogoMarquee from './Components/Skill'

function App() {


  return (
    <>
      <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white'>
        <Navbar />
      <Hero />
      <AboutMe/>
      <LogoMarquee></LogoMarquee>
      <Projects/>
      <Contact/>
      </div>
    </>
  )
}

export default App
