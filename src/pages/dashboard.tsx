import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Dashboard = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p className="indigo">
      <h1>DASHBOARD</h1>

      <div className="top-flex-container">
        <div className="top-flex-container top-flex-item">
          <img src="/assets/images/lupa.svg" alt="lupa" className="lupa-img" />
          <text className="dashboard-text">clasificar</text>
        </div>
        <div className="top-flex-container top-flex-item">
          <img
            src="/assets/images/persona.svg"
            alt="persona"
            className="persona-img"
          />
          <text className="dashboard-text">consejos</text>
        </div>
        <div className="top-flex-container top-flex-item">
          <img
            src="/assets/images/ondas.svg"
            alt="ondas"
            className="ondas-img"
          />
          <text className="dashboard-text">Historial</text>
        </div>
      </div>

      <div className="bottom-flex-container">
        <div className="bottom-flex-item">
          <img src="/assets/images/MRI.png" alt="MRI" className="mri" />
        </div>
        <div className="bottom-flex-item">
          <div className="right-flex-container">
            <div className="right-flex-container right-flex-item">
              <text className="dashboard-text">Subir mi MRI</text>
              <img
                src="/assets/images/nube.svg"
                alt="nube"
                className="nube-img"
              />
            </div>
            <div className="right-flex-container right-flex-item">
              <text className="dashboard-text">¿Necesitas ayuda?</text>
              <img
                src="/assets/images/signoDePregunta.svg"
                alt="signoDePregunta"
                className="signo-de-pregunta-img"
              />
            </div>
          </div>
        </div>
      </div>
    </p>
  </Main>
);

export default Dashboard;
