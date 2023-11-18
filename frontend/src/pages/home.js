import React from 'react'
import styled from '@emotion/styled'

const HomeWrapper = styled.div`
  background-color: var(--color-hero-bg);
  padding: 120px 0;
  .inner-container {
    display: flex;
    .home__left {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper className='home'>
      <div className='inner-container'>
        <div className='home__left'>
          <small>Blogs subtitle space</small>
          <h1>h1 Space</h1>
          <p>Paragraph</p>
          <button className='secondary'>Read More</button>
        </div>
        <div className='home__right'>
          <img src='https://lh3.googleusercontent.com/pw/ADCreHc_Rx7enGWCOmdsO5BxhbmGEgdSmsIbXZsJwgc12jz-rPJvRybT5iGpkVv88cGoPWqxLXY7hWJ2sWsHWZ0fq5ZTWQ7G45H-WVeF7hEUbLgwXYzZUES1FM_rowe3qGvbIao2bCZkxYbFEHfLe7yBRfYl9Q=w663-h884-s-no-gm' alt='Hero' />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Home