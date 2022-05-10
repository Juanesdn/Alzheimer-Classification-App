import { ReactNode } from 'react';

import Sidebar from '@/components/Sidebar/Sidebar';

import styles from './DashboardLayout.module.css';

type IMainProps = {
  children: ReactNode;
};

const DashboardLayout = (props: IMainProps) => {
  return (
    <div className={styles.dashboard__background}>
      <div className={styles.dashboard__container}>
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
