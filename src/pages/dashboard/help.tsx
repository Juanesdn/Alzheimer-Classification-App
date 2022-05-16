import Appbar from '@/components/Appbar/Appbar';

const Help = () => {
  return (
    <>
      <Appbar title="Ayuda" />
      <div>
        <section className="text-gray-700">
          <div className="container mx-auto px-5 py-16">
            <div className="mb-20 text-center">
              <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
                Preguntas Frecuentes
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
                Las preguntas más comunes sobre cómo funciona la aplicación.
              </p>
            </div>
            <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
              <div className="w-full px-4 py-2 lg:w-1/2">
                <details className="mb-4">
                  <summary className="rounded-md  bg-gray-200 py-2 px-4 font-semibold">
                    How Long is this site live?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="rounded-md bg-gray-200 py-2 px-4 font-semibold">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="rounded-md  bg-gray-200 py-2 px-4 font-semibold">
                    How can I migrate to another site?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div className="w-full px-4 py-2 lg:w-1/2">
                <details className="mb-4">
                  <summary className="rounded-md  bg-gray-200 py-2 px-4 font-semibold">
                    Can I change the domain you give me?
                  </summary>

                  <span className="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="rounded-md  bg-gray-200 py-2 px-4 font-semibold">
                    How many sites I can create at once?
                  </summary>

                  <span className="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="rounded-md  bg-gray-200 py-2 px-4 font-semibold">
                    How can I communicate with you?
                  </summary>

                  <span className="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Help.isDashboard = true;

export default Help;
