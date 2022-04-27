import { TextField } from '@mui/material';
import { Path, UseFormRegister } from 'react-hook-form';

interface IFormValues {
  'Full Name': string;
  Email: string;
  Password: string;
  'Confirm Password': string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const FormInput = ({ label, register, required }: InputProps) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      label={label}
      type={label.includes('Password') ? 'password' : 'text'}
      {...register(label, { required })}
    />
  );
};

export default FormInput;
