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
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import Link from '@/components/Link/Link';

interface IMainProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

type Inputs = {
  email: string | string[];
  password: string;
};

const SignIn = (props: IMainProps) => {
  const { handleSubmit, reset, control } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loginError, setLoginError] = useState<string | string[]>('');
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    signIn('credentials', {
      email,
      password,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
    /* .then((error: any) => {
      if (error.error) {
        enqueueSnackbar(error.error, {
          variant: 'error',
          autoHideDuration: 3000,
        });
      }
    }); */
    reset();
  };

  useEffect(() => {
    // Getting the error details from URL
    if (router.query.error) {
      setLoginError(router.query.error);
      reset({ email: router.query.email, password: '' }); // Reset the form
    }
  }, [router]);

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
            Iniciar Sesión
          </Typography>
          <Box
            className="flex flex-col items-center justify-center"
            component="form"
            sx={{ mt: 1, width: '100%' }}
          >
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
                  id="name"
                  name="name"
                  error={!!error || !!loginError}
                  helperText={error ? error.message : loginError}
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

            <p className="my-3">
              No tienes una cuenta?{' '}
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => router.push('/register')}
              >
                Registrate aquí
              </span>
            </p>
            <button
              className="flex w-full items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 text-sm text-white hover:border-indigo-700 hover:bg-indigo-700 focus:border-indigo-700"
              /* onClick={() =>
                signIn('email', {
                  callbackUrl: `${window.location.origin}/dashboard`,
                  email,
                })
              } */
              onClick={handleSubmit(onSubmit)}
            >
              <EmailIcon className="mr-2 h-6 w-6" />
              <span>Iniciar sesión</span>
            </button>
            <div className="relative flex w-full items-center py-5">
              <div className="grow border-t border-gray-400"></div>
              <span className="mx-4 shrink text-gray-400">o</span>
              <div className="grow border-t border-gray-400"></div>
            </div>

            {Object.values(props.providers).map((provider) => {
              return (
                provider.name !== 'credentials' && (
                  <button
                    key={provider.name}
                    className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-gray-500 focus:border-gray-500"
                    onClick={(evt) => {
                      evt.preventDefault();
                      signIn(provider.id, {
                        callbackUrl: `${window.location.origin}/dashboard`,
                      });
                    }}
                  >
                    <FcGoogle className="mr-2 h-6 w-6" />
                    <span>Iniciar sesión con {provider.name}</span>
                  </button>
                )
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
