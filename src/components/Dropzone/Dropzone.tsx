import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

type IMainProps = {
  setSelectedFile: (selectedFile: Blob | MediaSource | undefined) => void;
  error: boolean;
  setError: (error: boolean) => void;
};

const Dropzone = ({ setSelectedFile, error, setError }: IMainProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onDrop = useCallback((acceptedFiles) => {
    setIsDragging(false);
    setSelectedFile(acceptedFiles[0]);
    setError(false);
    enqueueSnackbar('Imagen montada con exito', {
      variant: 'success',
      autoHideDuration: 2000,
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        {...getRootProps({
          className: `flex flex-col h-32 w-full items-center justify-center rounded border-2 border-dashed cursor-pointer ${
            isDragging ? 'border-green-500' : 'border-black'
          }`,
          onDragEnter: () => {
            setIsDragging(true);
          },
          onDragExit: () => {
            setIsDragging(false);
          },
          onDragLeave: () => {
            setIsDragging(false);
          },
        })}
      >
        <input {...getInputProps()} />
        <CloudUploadIcon className="mr-5" />
        <span className="block">Cliquea o arrastra tu MRI aquí</span>
      </div>
      {error && (
        <div className="w-full p-4 text-sm text-red-600 ">
          Escoge una imagen para clasificar
        </div>
      )}
    </div>
  );
};

export default Dropzone;
