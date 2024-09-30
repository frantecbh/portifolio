import { About } from '../components/about'
import { Hero } from '../components/hero'
import { NavBar } from '../components/navbar'
import { Skills } from '../components/skills'

export const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Skills />
      <About />
    </div>
  )
}
