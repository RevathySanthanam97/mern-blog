import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext"

export const useLogoutContext = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutContext();
  
  const logout = () => {
    // REMOVE LOCAL STORAGE
    localStorage.removeItem('user');
  
    // DISPATCH LOGOUT ACTION
    dispatch({type: 'LOGOUT'})
    workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
  }

  return { logout };
}