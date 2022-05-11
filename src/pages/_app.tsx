import '../styles/global.css';

import type { NextComponentType } from 'next'; // Import Component type
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import DashboardLayout from '@/templates/DashboardLayout/DashboardLayout';

// Add custom appProp type with using union in type
type CustomAppProps = AppProps & {
  Component: NextComponentType & { isDashboard?: boolean }; // add isDashboard type
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) => (
  <SessionProvider session={session}>
    {Component.isDashboard ? (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    ) : (
      <Component {...pageProps} />
    )}
  </SessionProvider>
);

export default MyApp;
