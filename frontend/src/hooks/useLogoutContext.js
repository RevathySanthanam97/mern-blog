import { useAuthContext } from "./useAuthContext"
import { useBlogContext } from "./useBlogContext"

export const useLogoutContext = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: blogsDispatch } = useBlogContext();
  
  const logout = () => {
    // REMOVE LOCAL STORAGE
    localStorage.removeItem('user');
  
    // DISPATCH LOGOUT ACTION
    dispatch({type: 'LOGOUT'})
    blogsDispatch({type: 'SET_BLOGS', payload: null})
  }

  return { logout };
}