import { ButtonUnstyled, buttonUnstyledClasses } from '@mui/base';
import { styled } from '@mui/material';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Input = styled('input')({
  display: 'none',
});

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;

  background-color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #eceff1;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: black;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Dashboard = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p className="indigo">
      <h1>DASHBOARD</h1>
      <div className="top-flex-container">
        <CustomButton
          variant="contained"
          component="span"
          htmlFor="contained-button-file"
        >
          <label className="top-flex-container top-flex-item">
            <img
              src="/assets/images/lupa.svg"
              alt="lupa"
              className="lupa-img"
            />
            <text className="dashboard-text">clasificar</text>
          </label>
        </CustomButton>
        <CustomButton
          variant="contained"
          component="span"
          htmlFor="contained-button-file"
        >
          <label className="top-flex-container top-flex-item">
            <img
              src="/assets/images/persona.svg"
              alt="persona"
              className="persona-img"
            />
            <text className="dashboard-text">consejos</text>
          </label>
        </CustomButton>
        <CustomButton
          variant="contained"
          component="span"
          htmlFor="contained-button-file"
        >
          <label className="top-flex-container top-flex-item">
            <img
              src="/assets/images/ondas.svg"
              alt="ondas"
              className="ondas-img"
            />
            <text className="dashboard-text">Historial</text>
          </label>
        </CustomButton>
      </div>

      <div className="bottom-flex-container">
        <div className="bottom-flex-item">
          <img src="/assets/images/MRI.png" alt="MRI" className="mri" />
        </div>
        <div className="bottom-flex-item">
          <CustomButton
            variant="contained"
            component="span"
            htmlFor="contained-button-file"
          >
            <label className="right-flex-container right-flex-item">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <text className="dashboard-text">Subir mi MRI</text>
              <img
                src="/assets/images/nube.svg"
                alt="nube"
                className="nube-img"
              />
            </label>
          </CustomButton>
          <CustomButton
            variant="contained"
            component="span"
            htmlFor="contained-button-file"
          >
            <label className="right-flex-container right-flex-item">
              <text className="dashboard-text">¿Necesitas ayuda?</text>
              <img
                src="/assets/images/signoDePregunta.svg"
                alt="signoDePregunta"
                className="signo-de-pregunta-img"
              />
            </label>
          </CustomButton>
        </div>
      </div>
    </p>
  </Main>
);

export default Dashboard;
