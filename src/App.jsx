import About from "./components/About"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks"

function App() {

  return (
    <div className="static">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  )
}

export default App
