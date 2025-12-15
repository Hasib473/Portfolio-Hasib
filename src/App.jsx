
import './App.css'
import AboutMe from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import LogoMarquee from './Components/Skill'

function App() {


  return (
    <>
      <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white'>
        <Navbar />
      <Hero />
      <AboutMe/>
      <LogoMarquee></LogoMarquee>
      </div>
    </>
  )
}

export default App
