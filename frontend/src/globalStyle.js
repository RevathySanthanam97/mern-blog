import { css } from '@emotion/react'

export const GlobalStyle = css`  
  :root {
    --color-theme: #B8E8D1;
    --color-theme-2: #32463D;
    --color-theme-3: #62CE9A;
    --color-gray-1: #333;
    --color-gray-2: #4F4F4F;
    --color-gray-4: #BDBDBD;
    --color-gray-6: #F2F2F2;
    --color-white: #ffffff;
    --color-white-2: #F8F8F8;

    --color-border: var(--color-gray-4);
    
    /* Fonts  */
    --font-primary: Roboto-Regular;
  
    /* Nav Bar */
    --maxwidth-navbar: 1380px;
    --maxwidth-container: 1240px;
    --padding-container: 16px;
    @media screen and (min-width: 1024px) {
      --padding-container: 108px;
    }
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

  .app {
    max-width: 1609px;
    margin: auto;
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

  // title
  h1.title {
    font-size: 21px;
    line-height: normal;
    font-family: Roboto-Light;
    font-weight: 300;
    line-height: 28px;
    color: var(--color-gray-1);
    @media screen and (min-width: 1280px) {
      font-size: 42px;
    }
  }
  h2.title {
    font-size: 48px;
    font-weight: 800;
    line-height: 93.836%;
    color: var(--color-gray-1);
    @media screen and (min-width: 1280px) {
      font-size: 72px;
    }
  }
  .smalltitle {
    font-size: 18px;
    font-weight: 400;
    line-height: 93.836%;
    color: var(--color-gray-1);
    @media screen and (min-width: 1280px) {
      font-size: 36px;
    }
  }
  .subtitle {
    font-size: 24px;
    font-weight: 700;
    line-height: 93.836%;
    color: var(--color-gray-1);
    @media screen and (min-width: 1280px) {
      font-size: 36px;
    }
  }
  .highlight {
    background-color: var(--color-theme);
    border-radius: 4px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    &.primary {
      background-color: var(--color-theme);
      padding: 16px 32px;
      border-radius: 8px;
      box-shadow: 0px 10px 16px 0px rgba(192, 220, 207, 0.25);
    }
    &.asLink {
      color: var(--color-gray-1);
      border-bottom: 2px solid transparent;

      &:hover {
       border-bottom: 2px solid var(--color-theme);
      }
    }
  }
  .inner-container-1 {
    max-width: var(--maxwidth-container);
    padding: 0 var(--padding-container);
  }
  .inner-container-2 {
    max-width: 768px;
    padding: 0 var(--padding-container);
    margin: auto;
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
desktop-big: 1280;
*/
