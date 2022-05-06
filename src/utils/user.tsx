import fetch from 'isomorphic-unfetch';
import React from 'react';

// Use a global to save the user, so we don't have to fetch it again after page navigations
let userState: undefined;

const User = React.createContext({ user: null, loading: false });

export const fetchUser = async () => {
  if (userState !== undefined) {
    return userState;
  }

  const res = await fetch('/api/me');
  userState = res.ok ? await res.json() : null;
  return userState;
};

export const UserProvider = ({
  value,
  children,
}: {
  value: any;
  children: any;
}) => {
  const { user } = value;

  // If the user was fetched in SSR add it to userState so we don't fetch it again
  React.useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, []);

  return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => React.useContext(User);

export const useFetchUser = () => {
  const [data, setUser] = React.useState({
    user: userState || undefined,
    loading: userState === undefined,
  });

  React.useEffect(() => {
    if (userState !== undefined) {
      return;
    }

    let isMounted = true;

    fetchUser().then((user) => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        setUser({ user, loading: false });
      }
    });

    // eslint-disable-next-line consistent-return
    return () => {
      isMounted = false;
    };
  }, [userState]);

  return data;
};
