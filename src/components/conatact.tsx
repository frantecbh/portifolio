export const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto sm:py-20 p-5" id="contact">
      <div className="text-center">
        <p className="text-4xl font-bold leading-tight primary-color">
          Contato
        </p>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-slate-900 rounded-xl">
          <div className="p-10">
            <form action={import.meta.env.VITE_GETFORM_URL} method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Seu nome"
                      className="bg-transparent w-full py-4 px-4 text-gray-400 placeholder-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2.5 ">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Seu E-mail"
                      className="bg-transparent w-full py-4 px-4 text-gray-400 placeholder-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Sua mensagem"
                      className="bg-transparent w-full py-4 px-4 text-gray-400 placeholder-zinc-400 border border-gray-700 rounded-md focus:outline-none focus:border-indigo-600"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold bg-primary-color  rounded-md "
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
