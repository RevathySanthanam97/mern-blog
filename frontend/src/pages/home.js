import React from 'react'
import styled from '@emotion/styled'
import { Banner } from '../components/banner';
import { Profile } from '../components/profile';

const HomeWrapper = styled.div`
  .home__banner {
    margin-top: 15px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper className='home'>
      <Banner className="home__banner" />
      <Profile />
    </HomeWrapper>
  )
}

export default Home