import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { getSession } from 'next-auth/react';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Appbar from '@/components/Appbar/Appbar';
import Dropzone from '@/components/Dropzone/Dropzone';
import { createMRI } from '@/data/api';
import { SessionProps } from '@/types';

import styles from './Classify.module.css';

type Inputs = {
  age: string;
  genre: string;
  observations: string;
};

const Classify = () => {
  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource>();
  const [errorFile, setErrorFile] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, reset, control } = useForm<Inputs>({
    defaultValues: {
      age: '',
      genre: '',
      observations: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const session = await getSession();
    if (session) {
      const {
        accessToken,
        user: { userId },
      } = session as unknown as SessionProps;

      if (!selectedFile) {
        setErrorFile(true);
        return;
      }

      const reqBody = {
        age: data.age,
        genre: data.genre,
        observations: data.observations,
        userId,
        image: selectedFile,
      };

      /* const prediction = await getModelPrediction(selectedFile); */

      await createMRI(
        accessToken as string,
        userId as string,
        reqBody as any
      ).then((res) => {
        if (res.code === 400) {
          enqueueSnackbar(res.message, {
            variant: 'error',
            autoHideDuration: 3000,
          });
        }
        if (res.mri) {
          enqueueSnackbar('Clasificación creada con éxito', {
            variant: 'success',
            autoHideDuration: 3000,
          });
        }
      });
      setErrorFile(false);
    }
    setSelectedFile(undefined);
    reset();
  };

  return (
    <>
      <Appbar title="Clasificar" />
      <div className={styles.classify}>
        <Dropzone
          setSelectedFile={setSelectedFile}
          error={errorFile}
          setError={setErrorFile}
        />
        <div className={styles.classify__container}>
          <div className={styles.classify__form_container}>
            <div className={styles.image__container}>
              {!selectedFile && (
                <div className="flex h-96 w-full flex-col items-center justify-center rounded-3xl  border-2 border-dashed border-slate-400">
                  <InfoIcon className="mb-5" sx={{ fontSize: 40 }} />
                  <h2>No has montado ninguna imagen.</h2>
                </div>
              )}
              {selectedFile && (
                <img
                  className="h-96 w-full rounded-3xl"
                  src={URL.createObjectURL(selectedFile)}
                  alt="MRI"
                />
              )}
            </div>
            <Box
              component="form"
              className={styles.form__container}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name={'age'}
                control={control}
                rules={{
                  required: { value: true, message: 'Este campo es requerido' },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    className="mb-5"
                    onChange={onChange}
                    label="Edad"
                    value={value}
                    margin="normal"
                    fullWidth
                    id="edad"
                    name="edad"
                    error={!!error}
                    helperText={error ? error.message : ''}
                  />
                )}
              />

              <Controller
                name={'genre'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <FormControl className="mb-2" fullWidth error={!!error}>
                    <InputLabel id="genero">Género</InputLabel>
                    <Select
                      labelId="genero"
                      id="select-genero"
                      label="Género"
                      onChange={onChange}
                      value={value}
                    >
                      <MenuItem value="Femenino">Femenino</MenuItem>
                      <MenuItem value="Masculino">Masculino</MenuItem>
                      <MenuItem value="Otro">Otro</MenuItem>
                    </Select>
                    <FormHelperText>
                      {error ? error.message : ''}
                    </FormHelperText>
                  </FormControl>
                )}
              />
              <Controller
                name={'observations'}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    className="mb-5"
                    multiline
                    rows={4}
                    onChange={onChange}
                    label="Observaciones"
                    value={value}
                    margin="normal"
                    fullWidth
                    id="observaciones"
                    name="observaciones"
                    error={!!error}
                    helperText={error ? error.message : ''}
                  />
                )}
              />
              <button
                className="mb-2 inline-block w-full rounded bg-blue-600 px-6 py-4 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                type="submit"
              >
                Clasificar
              </button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

Classify.isDashboard = true;

export default Classify;
