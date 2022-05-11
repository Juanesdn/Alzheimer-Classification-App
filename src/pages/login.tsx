import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

import Link from '@/components/Link/Link';

interface IMainProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const SignUp = (props: IMainProps) => {
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
          <Box component="div" sx={{ mt: 1 }}>
            {Object.values(props.providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="mt-5"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: `${window.location.origin}/dashboard`,
                    })
                  }
                >
                  {/* <svg
                    className="mr-2 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg> */}
                  <FcGoogle className="mr-2 h-6 w-6" />
                  <span>Iniciar sesión con {provider.name}</span>
                </button>
              </div>
            ))}
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

export default SignUp;
