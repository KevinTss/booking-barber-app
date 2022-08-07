import { useEffect, useState } from "react";
import { firebaseAuth } from "../services/firebase";
import {User} from 'firebase/auth'

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(
          firebaseAuth.getAuth(),
          (firebaseUser) => {
            if (!firebaseUser) {
                console.log('no firebaseUser', firebaseUser)
              setIsLoading(false);
              return;
            }
            
            setUser(firebaseUser)
            setIsLoading(false);
    
            // fetch(firebaseUser.email as string).then(() => setIsLoading(false));
    
            return unsubscribe;
          }
        );
      }, []);

    return {
        user,
        isLoading
    }
}
