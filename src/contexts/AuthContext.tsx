import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { 
  signInWithPopup, 
  User, 
  setPersistence, 
  browserSessionPersistence, 
  signOut,
} from "firebase/auth";

import { auth, provider } from '../services/firebase';

interface IAuthContextType {
  user: User | undefined | null;
  SignOut: () => Promise<void>;
  SignInWithGoogle: () => Promise<void>;
}  

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextType);

export function AuthContextProvider(props: IAuthContextProviderProps) {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged((result) => { 
      if(result) setUser(result);
      else setUser(null);
    });
  }, [navigate]);

  useEffect(() => {
    if(location.pathname === "/" && user) {
      navigate("/dashboard");
    }
  }, [location.pathname, user, navigate]);

  async function SignInWithGoogle() {
    await setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        await signInWithPopup(auth, provider)
          .then((result) => {
            setUser(result.user)
          });
      });
    navigate("/dashboard");
  };

  async function SignOut() {
    await signOut(auth);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, SignInWithGoogle, SignOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
