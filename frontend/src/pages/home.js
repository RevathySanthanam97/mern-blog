import React from 'react'
import styled from '@emotion/styled'
import { Banner } from '../components/banner';

const HomeWrapper = styled.div`
`;

const Home = () => {
  return (
    <HomeWrapper className='home'>
      <Banner />
    </HomeWrapper>
  )
}

export default Home