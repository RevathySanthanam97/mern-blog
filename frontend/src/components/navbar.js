import React from 'react'
import { Link } from 'react-router-dom'
import { useLogoutContext } from '../hooks/useLogoutContext'
import { useAuthContext } from '../hooks/useAuthContext'

export const Navbar = () => {
  const { logout } = useLogoutContext();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  }

  return (
    <header>
      <nav>
        <a href='/'><Link to="/">Logo For Workout Pages</Link></a>
        {user && (
          <>
            <p>{user?.user?.username}</p>
            <p>{user.email}</p>
            <a href='/'><button onClick={() => handleLogout()}>Logout</button></a>
          </>
        )}
        {!user && (
          <>
            <a href='/'><Link to="/login">Login</Link></a>
            <a href='/'><Link to="/signup">Sign up</Link></a>
          </>
        )}
      </nav>
    </header>
  )
}
