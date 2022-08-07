import { firebaseAuth } from "../services/firebase";

export const useSignUp = () => {
  
  const signUpWithEmail = async (email: string, password: string) =>
  await firebaseAuth.createUserWithEmailAndPassword(
    firebaseAuth.getAuth(),
    email,
    password
  );
  
    return signUpWithEmail
}
