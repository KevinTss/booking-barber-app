import { firebaseAuth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import {useAuth} from "./useAuth"

export const useLogout = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
    
  const logout = () => {
    if (!user) return;

    firebaseAuth.signOut(firebaseAuth.getAuth()).then(() => {
      navigate("/")
    });
  };

    return logout
}
