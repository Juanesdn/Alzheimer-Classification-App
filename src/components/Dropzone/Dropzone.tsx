import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

type IMainProps = {
  setSelectedFile: (selectedFile: Blob | MediaSource | undefined) => void;
};

const Dropzone = ({ setSelectedFile }: IMainProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onDrop = useCallback((acceptedFiles) => {
    setIsDragging(false);
    setSelectedFile(acceptedFiles[0]);
    enqueueSnackbar('Imagen montada con exito', {
      variant: 'success',
      autoHideDuration: 2000,
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
};

export default Dropzone;
