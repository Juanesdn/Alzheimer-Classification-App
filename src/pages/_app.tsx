import '../styles/global.css';

import { AppProps } from 'next/app';

import { useFetchUser, UserProvider } from '@/utils/user';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
