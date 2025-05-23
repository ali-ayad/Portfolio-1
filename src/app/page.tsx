// import Navbar from "@/components/navbar"
// import Hero from "@/components/hero"
// import About from "@/components/about"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Contact from "@/components/contact"

import BackgroundAnimation from "@/components/BackgroundAnimation";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Navbar from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";


export default function Home() {
  return (
    <>
     <div className="fixed inset-0 bg-[#0d0d0d] z-[-2]" />
     <div className="fixed inset-0 z-[-1]">
        <BackgroundAnimation />
      </div>
      <div className="min-h-screen text-white">
        <Navbar />
        <main>
          <Hero />
          
          <About />
          <Skills />
           <Projects />
          <Contact />
        </main> 
      </div>
    </>
  )
}
