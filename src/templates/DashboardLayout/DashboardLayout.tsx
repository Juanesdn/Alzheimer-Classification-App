import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { ReactNode, useEffect, useState } from 'react';

import FullPageLoader from '@/components/FullPageLoader/FullPageLoader';
import Sidebar from '@/components/Sidebar/Sidebar';

import styles from './DashboardLayout.module.css';

type IMainProps = {
  children: ReactNode;
};

const DashboardLayout = (props: IMainProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const securePage = async () => {
    const session = await getSession();
    if (!session) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    securePage();
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className={styles.dashboard__background}>
      <div className={styles.dashboard__container}>
        <Sidebar />
        <div className={styles.dashboard}>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
