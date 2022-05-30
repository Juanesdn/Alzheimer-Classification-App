import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Link from '@/components/Link/Link';
import { signUpUser } from '@/data/api';
import { UserResponse } from '@/types';

type Inputs = {
  email: string;
  name: string;
  password: string;
};

const SignUp = () => {
  const { handleSubmit, reset, control } = useForm<Inputs>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signUpUser(data).then((res: UserResponse) => {
      if (res.code === 400) {
        enqueueSnackbar(res.message, {
          variant: 'error',
          autoHideDuration: 3000,
        });
      }
      if (res.user) {
        enqueueSnackbar('Cuenta creada con exito', {
          variant: 'success',
          autoHideDuration: 3000,
        });
        router.push('/login');
      }
    });
    reset();
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/assets/images/login.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link href="/">
          <IconButton
            aria-label="back"
            size="large"
            sx={{
              m: 1,
              display: { xs: 'none', sm: 'flex' },
              ':hover': { bgcolor: '#2F4CF1' },
            }}
          >
            <ArrowBackIcon fontSize="inherit" sx={{ color: '#FFFFFF' }} />
          </IconButton>
        </Link>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Link href="/">
          <IconButton
            aria-label="back"
            size="large"
            sx={{
              m: 1,
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <ArrowBackIcon fontSize="inherit" sx={{ color: '#000000' }} />
          </IconButton>
        </Link>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#4D66F3' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box
            className="flex flex-col items-center justify-center"
            component="form"
            sx={{ mt: 1, width: '100%' }}
          >
            <Controller
              name={'name'}
              control={control}
              rules={{
                required: { value: true, message: 'Este campo es requerido' },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  onChange={onChange}
                  label="Nombre"
                  value={value}
                  margin="normal"
                  fullWidth
                  id="name"
                  name="name"
                  error={!!error}
                  helperText={error ? error.message : ''}
                />
              )}
            />
            <Controller
              name={'email'}
              control={control}
              rules={{
                required: { value: true, message: 'Este campo es requerido' },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Ingresa un correo válido',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  onChange={onChange}
                  label="Correo electrónico"
                  value={value}
                  margin="normal"
                  fullWidth
                  id="email"
                  name="email"
                  error={!!error}
                  helperText={error ? error.message : ''}
                />
              )}
            />
            <Controller
              name={'password'}
              control={control}
              rules={{
                required: { value: true, message: 'Este campo es requerido' },
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener mínimo 8 caracteres',
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
                  message:
                    'La contraseña debe tener al menos un número y una letra',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  onChange={onChange}
                  label="Contraseña"
                  value={value}
                  margin="normal"
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  error={!!error}
                  helperText={error ? error.message : ''}
                />
              )}
            />
            <p className="mt-3">
              Ya tienes una cuenta?{' '}
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => router.push('/login')}
              >
                Inicia Sesión
              </span>
            </p>
            <button
              className="mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 text-sm text-white hover:border-indigo-700 hover:bg-indigo-700 focus:border-indigo-700"
              onClick={handleSubmit(onSubmit)}
            >
              <EmailIcon className="mr-2 h-6 w-6" />
              <span>Registrarse</span>
            </button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
