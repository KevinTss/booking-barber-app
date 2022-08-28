import { useEffect, useState } from "react";
import { firebaseAuth } from "../services/firebase";
import {User} from 'firebase/auth'

export const useAuth = () => {
  const [called, setCalled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCalled(true);
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      firebaseAuth.getAuth(),
      (firebaseUser) => {
        if (!firebaseUser) {
          setIsLoading(false);
          return;
        }

        setUser(firebaseUser);
        setIsLoading(false);

        return unsubscribe;
      }
    );
  }, []);

  return {
    user,
    isLoading,
    called,
  };
}
