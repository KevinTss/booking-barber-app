import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useAuthOnly = () => {
  const navigate = useNavigate();
  const { user, called, isLoading } = useAuth();

  useEffect(() => {
    if (called && !isLoading && user) {
      navigate('/');
      return;
    }
  }, [called, isLoading, navigate, user]);
};
