import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogoutContext } from '../hooks/useLogoutContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from '@emotion/styled';
import Logo from '../media/images/logo.png';
import Arrow from '../media/images/arrow.svg';
import { SocialLinks, Navlinks } from '../data';
import { Sidebar } from './sidebar';

const NavBarWrapper = styled.header`
  padding: 18px 12px;
  margin: auto;
  max-width: var(--maxwidth-navbar);
  background-color: var(--color-white);
  position: relative;
  z-index: 99;

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    @media screen and (min-width: 1024px) {
      gap: 64px;
    }

    // Style for Mobile Burger Menu
    .navbar__burgerMenu {
      cursor: pointer;
      width: 24px;
      height: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      .navbar__burgerIcon {
        position: relative;
        border-bottom: 3px solid var(--color-gray-1);
        width: 18px;
        border-radius: 24px;
        transition: 0.2s ease;
        &:nth-of-type(2n) {
          width: 24px;
        }
        &:nth-of-type(3n) {
          width: 15px;
        }
      }
      &:hover {
        .navbar__burgerIcon {
          width: 24px;
          &:nth-of-type(2n) {
            width: 15px;
          }
        }
      }
    }
    .sidebar__content {
      .navbar__quicklinks, .navbar__authLinks {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
        a, button {
          align-self: flex-end;
          cursor: pointer;
          padding-bottom: 5px;
          &::before {
            content: none;
          }
        }
      }
      .navbar__socialLinks {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        .email, .contact {
          align-self: flex-end;
          justify-content: flex-end;
          text-align: right;
          flex-basis: 100%;
          width: 100%;
        }
      }
    }

    /* Style for Desktop */
    .navbar__links {
      flex: 1;
      display: flex;
      align-items: flex-start;
      margin-top: 15px;
      gap: 24px;
      @media screen and (min-width: 1024px) {
        gap: 52px;
      }
      .navbar__quicklinks {
        gap: 24px;
        display: flex;
        align-items: center;
        margin-left: auto;
      }
      .navbar__socialLinks {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        max-width: 235px;
        gap: 10px;
        margin-left: auto;
        a:not(.email, .contact) {
          width: 32px;
          height: 32px;
          background-color: red;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(44, 194, 31, 0.10);
          img {
            width: 24px;
            height: 24px;
          }
        }
        
        a:nth-of-type(1), a:nth-of-type(2) {
          flex: 1 1 45%;
          text-align: left;
          &:nth-of-type(2) {
            text-align: right;
          }
        }
      }
      .navbar__authLinks {
        display: flex;
        flex-direction: column;
        gap: 10px;
        a {
          position: relative;
          padding-right: 25px;
          align-self: flex-start;
          &::after {
            content: '';
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            position: absolute;
            background-image: url(${Arrow});
            background-repeat: no-repeat;
            background-position: center;
            transform: rotate(220deg);
            width: 16px;
            height: 16px;
            background-size: 10px;
            border-radius: 50%;
            border: 1px solid var(--color-gray-1);
          }
        }
      }
    }
  }
`;

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { logout } = useLogoutContext();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  }

  const allLinks = (<>
    <div className='navbar__quicklinks'>
      {Navlinks.map((nav) => (
        <Link className='plain hover-underline' key={nav.title} to={nav.link}>
          {nav.title}
        </Link>
      ))}
    </div>
    <div className='navbar__authLinks'>
      {user && (
        <>
          <a href='/' className='plain'><p className='navbar__username'>Hi, {user?.user?.username || user?.email}</p></a>
          <a href='/' className='plain'><button onClick={() => handleLogout()}>Logout</button></a>
        </>
      )}
      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </>
      )}
    </div>
    <div className='navbar__socialLinks'>
      {SocialLinks.map((link) => (
        <a key={link.link} className={`${link.className || ''} plain`} href={link.link}>
          {link.label && <span>{link.label}</span>}
          {link.img && <img alt='Social Media' src={link.img} />}
        </a>
      ))}
    </div>
  </>);
  
  return (
    <NavBarWrapper className='navbar'>
      <nav className='inner-container'>
        <div className='navbar__logo'>
          <Link to="/">
            <img src={Logo} width={'80px'} alt="Logo" />
          </Link>
        </div>
        <div className='desktop-show navbar__links'>{allLinks}</div>
        <div className='desktop-hide navbar__burger'>
          <div className='navbar__burgerMenu' onClick={() => setOpenMenu(true)}>
            <span className='navbar__burgerIcon' />
            <span className='navbar__burgerIcon' />
            <span className='navbar__burgerIcon' />
          </div>
          <div className='navbar__burgercontainer'>
            <Sidebar
              openSidebar={openMenu}
              elements={allLinks}
              onClose={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>
    </NavBarWrapper>
  )
}
