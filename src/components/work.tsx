import encurtaLink from '../asset/projetos/encuratlink.png'
import todolist from '../asset/projetos/todlist.png'
import listapresenca from '../asset/projetos/listapresenca.png'
import notes from '../asset/projetos/notes.png'
import qrcode from '../asset/projetos/qrcode.png'
import gallery from '../asset/projetos/gallery.png'

export const Projetos = () => {
  return (
    <div className="max-w-6xl mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Projetos</p>
        <p>Veja alguns projetos criados por mim</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        {/* card projeto */}
        <div className="flex flex-col">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-md flex flex-col justify-center items-center h-52 bg-cover relative">
            <img src={listapresenca} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/80 absolute inset-0 flex flex-col justify-center items-center">
              <a
                href="https://listapresenca.frantecit.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  veja
                </button>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold tracking-wider">
              Lista de Presença
            </p>
            <span>
              O projeto de Lista de Presença Online é uma aplicação web
              desenvolvida com React.js, Tailwind CSS e Firebase, que permite o
              registro e gerenciamento de presenças de maneira simples e
              eficiente. Com essa ferramenta, o organizador pode criar salas
              específicas e compartilhar o link com os participantes, que
              poderão assinar a lista de presença de forma prática e rápida
            </span>
          </div>
        </div>
        {/* fim card projeto */}
        {/* card projeto */}
        <div className="flex flex-col">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-md flex flex-col justify-center items-center h-52 bg-cover relative">
            <img src={notes} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/80 absolute inset-0 flex flex-col justify-center items-center">
              <a
                href="https://notes.frantecit.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  veja
                </button>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold tracking-wider">Notas</p>
            <span>
              O Notes Online é uma aplicação web desenvolvida com React.js e
              Tailwind CSS, projetada para permitir que os usuários salvem suas
              notas de forma prática, utilizando tanto texto quanto áudio. Com a
              integração da Speech Recognition API, os usuários podem ditar suas
              notas, tornando o processo ainda mais ágil e acessível.
            </span>
          </div>
        </div>
        {/* fim card projeto */}
        {/* card projeto */}
        <div className="flex flex-col">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-md flex flex-col justify-center items-center h-52 bg-cover relative">
            <img src={todolist} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/80 absolute inset-0 flex flex-col justify-center items-center">
              <a
                href="https://desafiotodolist.frantecit.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  veja
                </button>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold tracking-wider">Todo List</p>
            <span>
              O Clássico Todo List é uma aplicação web desenvolvida com React.js
              e Tailwind CSS, projetada para ajudar os usuários a gerenciar suas
              tarefas diárias de maneira simples e eficaz. Com uma interface
              intuitiva, os usuários podem adicionar, editar e remover tarefas
              conforme necessário.
            </span>
          </div>
        </div>
        {/* fim card projeto */}
        {/* card projeto */}
        <div className="flex flex-col">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-md flex flex-col justify-center items-center h-52 bg-cover relative">
            <img src={qrcode} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/80 absolute inset-0 flex flex-col justify-center items-center">
              <a
                href="https://qrcode.frantecit.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  veja
                </button>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold tracking-wider">Gerador QRCode</p>
            <span>
              O Clássico Todo List é uma aplicação web desenvolvida com React.js
              e Tailwind CSS, projetada para ajudar os usuários a gerenciar suas
              tarefas diárias de maneira simples e eficaz. Com uma interface
              intuitiva, os usuários podem adicionar, editar e remover tarefas
              conforme necessário.
            </span>
          </div>
        </div>
        {/* fim card projeto */}
        {/* card projeto */}
        <div className="flex flex-col">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-md flex flex-col justify-center items-center h-52 bg-cover relative">
            <img src={encurtaLink} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/80 absolute inset-0 flex flex-col justify-center items-center">
              <a
                href="https://mylink.frantecit.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  veja
                </button>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold tracking-wider">Encurta Link</p>
            <span>
              O Encurtador de Links é uma aplicação web desenvolvida com
              React.js e Tailwind CSS, que permite aos usuários encurtar URLs de
              forma rápida e fácil. Utilizando a API do Bitly, o aplicativo
              oferece uma maneira eficiente de gerar links curtos, enquanto o
              armazenamento no LocalStorage garante que as URLs encurtadas sejam
              salvas para uso futuro
            </span>
          </div>
        </div>
        {/* fim card projeto */}
        {/* card projeto */}
        <div className="flex flex-col">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-md flex flex-col justify-center items-center h-52 bg-cover relative">
            <img src={gallery} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/80 absolute inset-0 flex flex-col justify-center items-center">
              <a
                href="https://mylink.frantecit.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  veja
                </button>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold tracking-wider">Galeria Fotos</p>
            <span>
              O projeto de Upload de Imagens é uma aplicação web desenvolvida
              com React.js e Tailwind CSS, que permite aos usuários fazer upload
              e gerenciar imagens de forma simples e eficiente. Utilizando o
              Firestore do Firebase, as imagens são armazenadas de maneira
              segura e acessível.
            </span>
          </div>
        </div>
        {/* fim card projeto */}
      </div>
    </div>
  )
}
