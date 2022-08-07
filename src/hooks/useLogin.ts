import { firebaseAuth } from "../services/firebase";

export const useLogin = () => {
  
    const loginWithEmail = async (email: string, password: string) =>
    await firebaseAuth.signInWithEmailAndPassword(
      firebaseAuth.getAuth(),
      email,
      password
    );
  
    return loginWithEmail
}
