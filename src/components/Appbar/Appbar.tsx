import { Avatar } from '@mui/material';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import styles from './Appbar.module.css';

type IMainProps = {
  title: string;
};

type IUser = {
  /**
   * User's name
   * @type {string}
   * @memberof IUser
   * @example
   * "John Doe"
   */
  name: string;
  /**
   * User's email
   * @type {string}
   * @memberof IUser
   * @example
   * test@test.com
   */
  email: string;
  /**
   * User's avatar
   * @type {string}
   * @memberof IUser
   * @example
   * "https://avatars0.githubusercontent.com/u/1234?s=460&v=4"
   */
  image: string;
};

const Appbar = (props: IMainProps) => {
  const [user, setUser] = useState<IUser>();

  const securePage = async () => {
    const session = await getSession();
    if (session) {
      setUser(session.user as IUser);
    }
  };

  useEffect(() => {
    securePage();
  }, []);

  return (
    <div className={styles.dashboard__appbar}>
      <h1>{props.title}</h1>
      <div className={styles.dashboard__appbar__user}>
        <p>
          Hola, <span>{user?.name}</span>
        </p>
        <Avatar src={user?.image} />
      </div>
    </div>
  );
};

export default Appbar;
