import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';

import { SidebarData } from '@/data/Data';
import Logo from '@/public/assets/images/brain_logo.png';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const getSelectedItem = () => {
    const path = router.pathname;
    const selectedItem = SidebarData.find((item) => item.link === path);
    setSelected(selectedItem?.id ?? 0);
  };

  useEffect(() => {
    getSelectedItem();
  }, [router.pathname]);

  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.sidebar__logo}>
        <img src={Logo.src} alt="" />
        <span>
          <span>Sen</span>App
        </span>
      </div>
      {/* Menu */}
      <div className={styles.sidebar__menu}>
        {SidebarData.map((item) => (
          <div
            className={`${styles.sidebar__menu_item} ${
              selected === item.id && styles.sidebar__menu_item__active
            }`}
            key={item.id}
            onClick={() => {
              router.push(item.link);
              setSelected(item.id);
            }}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
        <div
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}`,
            })
          }
          className={styles.sidebar__menu_item__logout}
        >
          <RiLogoutCircleRLine />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
