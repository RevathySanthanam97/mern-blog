import React from 'react'
import styled from '@emotion/styled'
import LeafImage from '../media/images/leaf.png';
import Hero from '../media/images/hero.png';

const BannerWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-gray-6);
    border-top-left-radius: 180px;
  }
  .banner__innercontainer {
    display: flex;
    max-width: var(--maxwidth-container);
    padding: 0 16px;
    position: relative;
    overflow: hidden;

    .banner__right {
      position: absolute;
      width: 100%;
      height: 400px;
      right: -180px;
      .leaf {
        display: none;
      }
      .hero {
        width: 348px;
      }
    }
  }
`;

export const Banner = () => {
  return (
    <BannerWrapper>
      <div className='banner__innercontainer'>
        <div className='banner__left'>
          <small>Beyond the Bookshelf</small>
          <h1 className='title'>Ink, Quirks, and Verse: Where Every Page Tells a Tale of Life's Eccentricities</h1>
          <p>Welcome to Literary Labyrinth, where curiosity meets insight. Embark on a journey of discovery as we delve into the realms of science, technology, and the fascinating wonders of the world. Our mission is to ignite your intellectual curiosity and inspire you to explore the frontiers of knowledge.</p>
          <p>Immerse yourself in thought-provoking narratives and insightful perspectives that go beyond the surface. At Literary Labyrinth, we curate content that not only entertains but also enriches your mind. From the latest breakthroughs in science to captivating human stories, we bring you a diverse tapestry of knowledge.</p>
          <button className='secondary'>Read More</button>
        </div>
        <div className='banner__right'>
          <img className='leaf' src={LeafImage} alt='Hero' />
          <img className='hero' src={Hero} alt='Hero' />
        </div>
      </div>
    </BannerWrapper>
  )
}
