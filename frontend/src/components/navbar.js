import React from 'react';
import { Link } from 'react-router-dom';
import { useLogoutContext } from '../hooks/useLogoutContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from '@emotion/styled';
import Logo from '../media/images/logo.png';

const NavBarWrapper = styled.header`
  background-color: var(--color-hero-bg);
  padding: 20px 0;

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      font-family: var(--font-nav);
    }
  }
`;

export const Navbar = () => {
  const { logout } = useLogoutContext();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  }

  return (
    <NavBarWrapper className='navbar'>
      <nav className='inner-container'>
        <div className='navbar__logo'>
          <Link to="/">
            <img src={Logo} width={'50px'} alt="Logo" />
          </Link>
        </div>
        <div className='navbar__links'>
          <Link to="/">
            Home
          </Link>
          <Link to="/list">
            Blogs
          </Link>
          <Link to="/about-us">
            About Us
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
        <div className='navbar__authLinks'>
          {user && (
            <>
              <p>{user?.user?.username || user?.email}</p>
              <a href='/'><button onClick={() => handleLogout()}>Logout</button></a>
            </>
          )}
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </NavBarWrapper>
  )
}
