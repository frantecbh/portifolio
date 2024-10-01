import { About } from '../components/about'
import { Contact } from '../components/conatact'
import { Hero } from '../components/hero'
import { NavBar } from '../components/navbar'
import { Skills } from '../components/skills'
import { Projetos } from '../components/work'

export const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projetos />
      <Contact />
    </div>
  )
}
