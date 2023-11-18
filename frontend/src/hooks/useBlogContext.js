import { BlogsContext } from '../context/blogContext';
import { useContext } from 'react';

export const useBlogContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw Error('Use Blog Context for context');
  }
  return context
}