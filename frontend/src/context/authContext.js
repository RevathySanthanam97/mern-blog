import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        user: null
      }
    case 'LOGIN':
    return {
      user: action.payload
    }
    default:
      return state
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, {
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({type : 'LOGIN', payload: user})
    }
  }, []);
  
  console.log('AuthContext state:', state)
  
  return (
    <UserContext.Provider value={{ ...state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}