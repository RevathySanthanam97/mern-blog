import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Close from '../media/images/close.png';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  width: 100vw;
  background-color: #00000066;
  height: 100vh;
  overflow: hidden;
  right: 0;

  .sidebar__wrapper {
    height: calc(100% - 20px);
    padding: 22px 16px 20px;
    overflow-y: auto;
    box-sizing: content-box;
    background-color: white;
    width: 90%;
    max-width: 250px;
    position: absolute;
    right: -320px;
    transform: translateX(0);
    transition: transform 0.5s;

    .sidebar__content {
      margin-top: 50px;
    }

    .sidebar__closebtn {
      text-align: right;
      img {
        cursor: pointer;
        width: 24px;
      }
    }
  }

  &.open {
    .sidebar__wrapper{
      transform: translateX(-320px);
    }
  }
`;

export const Sidebar = ({ onClose, openSidebar, elements }) => {
  const [show, setShow] = useState(openSidebar);

  useEffect(() => {
    setShow(openSidebar);
  }, [openSidebar]);

  const closeSidebar = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <>
      {openSidebar && (
        <SidebarWrapper onClick={(e) => e.target === e.currentTarget && closeSidebar()} className={show ? 'open' : ''}>
          <div className='sidebar__wrapper'>
            <div className='sidebar__closebtn'>
              <img onClick={() => closeSidebar()} src={Close} alt="Close" />
            </div>
            <div className='sidebar__content'>
              {elements}
            </div>
          </div>
        </SidebarWrapper>
      )}
    </>
  )
}
