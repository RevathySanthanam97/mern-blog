import { css } from '@emotion/react'

export const GlobalStyle = css`  
  :root {
    --color-theme: #B8E8D1;
    --color-gray-1: #333;
    --color-gray-2: #4F4F4F;
    --color-gray-4: #BDBDBD;
    --color-gray-6: #F2F2F2;
    --color-white: #fff;
    
    /* Fonts  */
    --font-primary: Roboto-Regular;
  
    /* Nav Bar */
    --maxwidth-navbar: 1380px;
    --maxwidth-container: 1240px;
  }

  body {
    font-family: var(--font-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  // Global Element Styles
  a {
    &.plain {
      text-decoration: none;
      color: inherit;

      &.hover-underline {
        position: relative;
        padding-bottom: 5px;
        &::before {
          position: absolute;
          content: '';
          width: 0;
          bottom: 0;
          border-bottom: 3px solid var(--color-theme);
          transition: 0.2s ease;
        }
        &:hover::before {
          width: 70%;
        }
      }

      &.plain-hover-color:hover {
        color: var(--color-theme);
      }
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .title {
    font-size: 24px;
    line-height: normal;
    font-family: Roboto-Light;
    font-weight: 300;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .desktop-show {
    display: none!important;
    @media screen and (min-width: 1024px) {
      display: inherit!important;
    }
  }
  .desktop-hide {
    display: block!important;
    @media screen and (min-width: 1024px) {
      display: none!important;
    }
  }
`;

/* Preferred Width
ipad: 768;
desktop: 1024;
*/
