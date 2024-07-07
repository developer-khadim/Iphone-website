import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import HowitWorks from "./components/HowitWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"


const App = () =>{ 
  return (
    <>
     <main className="bg-black" >
     < Navbar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowitWorks/>
      <Footer/>
      </main> 
    </>
  )
}

export default App
