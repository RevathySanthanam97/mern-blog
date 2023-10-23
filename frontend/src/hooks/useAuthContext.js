import { UserContext } from '../context/authContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw Error('Use Auth Context for context');
  }
  return context
}