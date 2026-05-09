import About from "@/components/About"
import Hero from "@/components/Hero"
import { Navbar1 } from "@/components/navbar1"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Page() {
  return (
    <div className="bg-[#FFFAF0]">
      <Navbar1 />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
