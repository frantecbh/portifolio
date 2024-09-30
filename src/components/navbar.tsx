import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="text-gray-400 h-full max-w-6xl mx-auto flex justify-between items-center py-4">
      <h1 className="primary-color text-3xl font-bold ml-4">
        Francisco Menezes
      </h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">Sobre</a>
        </li>
        <li className="p-5">
          <a href="#work">Projetos</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <X size={20} /> : <Menu size={20} />}
      </div>

      {/* mobile navigation */}
      <div
        className={
          nav
            ? 'fixed h-full left-0 top-0 w-[50%] bg-slate-950 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="text-3xl font-bold ml-4">Francisco Menezes</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">Sobre</a>
          </li>
          <li className="p-2">
            <a href="#work">Projetos</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
