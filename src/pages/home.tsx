import { Hero } from '../components/hero'
import { NavBar } from '../components/navbar'
import { Skills } from '../components/skills'

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
    </div>
  )
}
