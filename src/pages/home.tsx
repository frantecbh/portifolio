import { About } from '../components/about'
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
    </div>
  )
}
