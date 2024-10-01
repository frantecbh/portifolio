import aboutImage from '../asset/about-image.jpg'

export const About = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 " id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex ">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">
              Quem sou eu?
            </h2>
            <p className="text-base lg:text-lg  md:text-justify">
              Sou um profissional de TI com mais de 20 anos de experiência,
              unindo uma sólida base em infraestrutura e suporte a um crescente
              foco em desenvolvimento de software. Minha jornada me levou a
              coordenar equipes e implementar soluções tecnológicas em ambientes
              complexos, sempre alinhando as necessidades do negócio com
              resultados de alto impacto.
            </p>
            <br />
            <p className="text-base lg:text-lg md:text-justify">
              Atualmente, estou em contínuo desenvolvimento na carreira de
              desenvolvedor, aprimorando minhas habilidades em front-end com
              ReactJS e back-end com Node.js.
            </p>
            <br />
            <p className="text-base lg:text-lg  md:text-justify">
              Com um sólido conhecimento em HTML, JavaScript e CSS, utilizo
              ReactJS para construir interfaces de usuário dinâmicas e
              responsivas, criando experiências envolventes. No lado do
              servidor, trabalho com Node.js para desenvolver APIs robustas e
              escaláveis, integrando soluções eficientes para atender às
              necessidades do negócio.
            </p>
            <br />
            <p className="text-base lg:text-lg  md:text-justify">
              Estou sempre em busca de desafios que me permitam entregar
              soluções inovadoras e eficientes, contribuindo para a
              transformação digital das organizações.
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1">
          <img
            className=" mx-auto rounded-3xl py-8 md:py-0 h-auto w-96"
            src={aboutImage}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
