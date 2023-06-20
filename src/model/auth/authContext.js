import React, { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '../configuration/supabase';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [userSession, setUserSession] = useState(null);
  const [user, setUser] = useState(null);
  const [event, setEvent] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        // display login page
        setEvent('SIGNED_OUT');
      } else if (event === 'PASSWORD_RECOVERY') {
        setEvent('PASSWORD_RECOVERY');
    
        // show screen to update user's password
      } else {
        setUserSession(session);
        setUser(session?.user ?? null);
      }
    });

    return () => {
      listener.unsubscribe();
    };
  }, []);

  const value = {
    userSession,
    user,
    event
  };
  return <AuthContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  return useContext(AuthContext);
};