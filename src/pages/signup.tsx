import { ThemeProvider } from '@emotion/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import FormInput from '@/components/FormInput/FormInput';

interface IFormValues {
  'Full Name': string;
  Email: string;
  Password: string;
  'Confirm Password': string;
}

const theme = createTheme();

const SignUp = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/assets/images/signup-image.jpg)',
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
            <a>
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
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Link href="/">
            <a>
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
            </a>
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
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <FormInput required label="Full Name" register={register} />
              <FormInput required label="Email" register={register} />
              <FormInput required label="Password" register={register} />
              <FormInput
                required
                label="Confirm Password"
                register={register}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: '#4D66F3',
                  ':hover': { bgcolor: '#2F4CF1' },
                }}
                size="large"
              >
                Registrarse
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
