import { TypeAnimation } from 'react-type-animation'

import avatar from '../asset/avatar.jpg'

export const Hero = () => {
  const fileUrl =
    'https://firebasestorage.googleapis.com/v0/b/meus-projetos-1b2fa.appspot.com/o/curriculo_francisco.pdf?alt=media&token=0be2abf1-6bfd-41b3-964e-a8f47750c7e4' // Link do arquivo no repositório

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl md:h-[70vh]  mx-auto p-8 ">
      <div className="flex items-center justify-center col-span-1 my-auto mx-auto w-80 h-auto lg:w-[400px]">
        <img src={avatar} alt="hero image" className="rounded-full h-72" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
          <span className="primary-color">I´m a</span>
          <br />
          <TypeAnimation
            sequence={['Desenvolvedor', 1000, 'Full Stack', 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="sm:text-lg my-6 lg:text-xl">
          Meu nome é Francisco Menezes e eu tenho 4+ anos de experiência em
          desenvolvimento web.
        </p>

        <div className="my-8">
          <a
            href={fileUrl}
            target="_blank"
            className="px-6 py-3 w-full rounded-xl mr-4  bg-gradient-to-r from-violet-600 to-indigo-600"
            rel="noreferrer"
          >
            Donload CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
