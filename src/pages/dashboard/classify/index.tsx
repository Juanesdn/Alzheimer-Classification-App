import InfoIcon from '@mui/icons-material/Info';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';

import Appbar from '@/components/Appbar/Appbar';
import Dropzone from '@/components/Dropzone/Dropzone';

import styles from './Classify.module.css';

const Classify = () => {
  const [selectedFile, setSelectedFile] = useState<Blob | MediaSource>();
  const [genero, setGenero] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setGenero(event.target.value as string);
  };
  return (
    <>
      <Appbar title="Clasificar" />
      <div className={styles.classify}>
        <Dropzone setSelectedFile={setSelectedFile} />
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
            <div className={styles.form__container}>
              <TextField className="mb-5" label="Edad" />
              <FormControl className="mb-5" fullWidth>
                <InputLabel id="genero">Género</InputLabel>
                <Select
                  labelId="genero"
                  id="select-genero"
                  value={genero}
                  label="Género"
                  onChange={handleChange}
                >
                  <MenuItem value="hombre">Hombre</MenuItem>
                  <MenuItem value="mujer">Mujer</MenuItem>
                  <MenuItem value="otro">Otro</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="mb-5"
                multiline
                rows={4}
                label="Observaciones"
              />
              <button
                className="mb-2 inline-block w-full rounded bg-blue-600 px-6 py-4 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                onClick={() => {
                  console.log('clicked');
                }}
              >
                Clasificar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Classify.isDashboard = true;

export default Classify;
