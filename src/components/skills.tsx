import tailwindcss from '../asset/tailwind.png'
import nodejs from '../asset/node.png'
import reactjs from '../asset/react.png'

import html from '../asset/html.png'
import css from '../asset/css.png'
import javascript from '../asset/javascript.png'

export const Skills = () => {
  return (
    <div className="border border-slate-600 md:h-40 max-w-6xl mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md: items-center">
      <div className="flex flex-col items-center md:m-4 m-1 sm:my-0 w-20 md:w-24">
        <img className="h-10 w-10" src={html} alt="" />
        <p className="mt-2 text-sm md:text-base">HTML</p>
      </div>
      <div className="flex flex-col items-center md:m-4 m-1 sm:my-0 w-20 md:w-24">
        <img className="h-10 w-10" src={css} alt="" />
        <p className="mt-2 text-sm md:text-base">CSS</p>
      </div>
      <div className="flex flex-col items-center md:m-4 m-1 sm:my-0 w-20 md:w-24">
        <img className="h-10 w-10" src={javascript} alt="" />
        <p className="mt-2 text-sm md:text-base">JavaScript</p>
      </div>
      <div className="flex flex-col items-center md:m-4 m-1 sm:my-0 w-20 md:w-24">
        <img className="h-10 w-10" src={tailwindcss} alt="" />
        <p className="mt-2 text-sm md:text-base">Tailwind</p>
      </div>
      <div className="flex flex-col items-center md:m-4 m-1 sm:my-0 w-20 md:w-24">
        <img className="h-10 w-10" src={reactjs} alt="" />
        <p className="mt-2 text-sm md:text-base">React</p>
      </div>
      <div className="flex flex-col items-center md:m-4 m-1 sm:my-0 w-20 md:w-24">
        <img className="h-10 w-10" src={nodejs} alt="" />
        <p className="mt-2 text-sm md:text-base">NodeJS</p>
      </div>
    </div>
  )
}
