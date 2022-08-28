import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

export const useAuthOnly = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate('/');
    return;
  }
};
