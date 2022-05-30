import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <div className="landing__container">
      <Main
        meta={
          <Meta
            title="Alzheimer Classification App"
            description="Alzheimer Classification App"
          />
        }
      >
        <div className="hero-img" />
        <div className="hero-card" />
        <div className="wrapper">
          <section className="hero">
            <h1 className="title header__title">Ahorra tiempo.</h1>
            <p className="mt-12 text-2xl">
              Evalúa tu estado de salud mental, el de tu familiar o paciente.
              Obtén una clasificación de tu MRI de forma rápida, segura y
              eficáz.
            </p>
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="mt-5 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comienza a clasificar
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="down-arrow">
              <svg
                viewBox="0 0 16 132"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"
                  fill="black"
                />
              </svg>
            </div>
          </section>
          <section>
            <div className="feature">
              <div className="content">
                <p className="title">Nuestra app</p>
                <p className="description">
                  Nuestra aplicación de clasificación utiliza redes neuronales
                  para lograr clasificar el tipo de Alzheimer a través del
                  modelo VGG16.
                </p>
              </div>
              <img src="/assets/images/img3.jpeg" alt="Brain MRI" />
            </div>
            <div className="feature flip">
              <div className="content">
                <p className="title">Nuestro aprendizaje</p>
                <p className="description">
                  Utilizamos algoritmos y realizamos cálculos para de esta
                  manera lograr que nuestro modelo sea lo más preciso posible al
                  momento de realizar una clasificación.
                </p>
              </div>
              <img src="/assets/images/learn.jpg" alt="Code" />
            </div>
            <div className="feature">
              <div className="content">
                <p className="title">Nuestros resultados</p>
                <p className="description">
                  Nuestros resultados tienen un nivel de fiabilidad del 93%,
                  siendo nuestro modelo uno de los más precisos al momento de
                  realizar una clasificación.
                </p>
              </div>
              <img
                src="/assets/images/woman-doing-occupational-therapy-session-with-psychologist.jpg"
                alt="Woman doing ocupational therapy"
              />
            </div>
          </section>
        </div>
      </Main>
    </div>
  );
};

export default Index;
