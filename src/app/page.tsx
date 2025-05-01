// import Navbar from "@/components/navbar"
// import Hero from "@/components/hero"
// import About from "@/components/about"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Contact from "@/components/contact"

import BackgroundAnimation from "@/components/BackgroundAnimation";
import About from "@/sections/About";
import Navbar from "@/sections/Header";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";


export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen text-white">
        <Navbar />
        <main>
          <Hero />
          
          <About />
          <Skills />
          {/* <Projects />
          <Contact />*/}
        </main> 
      </div>
    </>
  )
}
