import { css } from '@emotion/react'

export const GlobalStyle = css`  
  :root {
    /* colors  */
    --color-hero-bg: #f7f3f0;
    --color-link: #868380;
    --color-link-active: #4b4744;
    --color-subtitle: #5b5754;
    --color-title: #353535;
    --color-text: #7b7774;
    --color-btn: #373330;
    --color-btn-border: #d19163;
    --color-filled-btn: #ffffff;
    --color-btn-hover: #f5f1ee;

    /* fonts  */
    --font-primary: Roboto-Regular;
    --font-nav: Gothic-Regular;
    --font-small: OpenSans-Medium;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .app__main {
    font-family: var(--font-primary);
  }

  .inner-container {
    max-width: 1200px;
    margin: auto;
  }

  /* text formatting  */
  small {
    font-family: var(--font-small);
    letter-spacing: 0.5px;
  }

  /* button style */
  button {
    padding: 8px 16px;
    border-radius: 24px;
    background-color: transparent;
    border: 1px solid var(--color-btn-border);
    color: var(--color-btn-border);
    cursor: pointer;
    transition: 0.2s ease;
    :hover {
      background-color: var(--color-btn-border);
      color: var(--color-btn-hover);
    }

    &.filled {
      background-color: var(--color-btn-border);
      color: var(--color-btn-hover);
      &:hover {
        background-color: transparent;
        color: var(--color-btn-border);
      }
    }
    &.secondary {
      border-radius: 12px;
      padding: 10px 15px;
    }
  }
`;

