import About from "@/components/About"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { Navbar1 } from "@/components/navbar1"
import Skills from "@/components/Skills"

export default function Page() {
  return (
    <div className="bg-[#FFFAF0]">
      <Navbar1 />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education  />
      <Contact />
      <Footer />
    </div>
  )
}
