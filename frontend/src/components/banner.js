import React from 'react'
import styled from '@emotion/styled'
import LeafImage from '../media/images/leaf-1.png';
import Hero from '../media/images/hero.png';
import { Row } from './layout/row';

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
    @media screen and (min-width: 768px) {
      min-width: 380px;
      width: 34%;
    }
    @media screen and (min-width: 1024px) {
      width: 41%;
    }
  }
  .banner__innercontainer {
    display: flex;
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      gap: 20px;
    }

    .banner__right {
      position: absolute;
      width: 100%;
      height: 400px;
      right: -180px;
      bottom: 0;
      font-size: 0;
      @media screen and (min-width: 768px) {
        width: 50%;
        max-width: 500px;
        position: relative;
        right: unset;
        margin-top: auto;
        height: unset;
      }
      .leaf {
        display: none;
        @media screen and (min-width: 768px) {
          display: block;
          position: absolute;
          z-index: 0;
          left: 100px;
        }
      }
      .hero {
        width: 348px;
        position: relative;
      }
    }

    .banner__left {
      margin-top: 30px;
      @media screen and (min-width: 768px) {
        flex:  1;
      }
      small {
        font-size: 18px;
        font-family: Roboto-Light;
        @media screen and (min-width: 1280px) {
          font-size: 24px;
        }
      }
      .title {
        margin: 10px 0 20px;
        max-width: 210px;
        @media screen and (min-width: 768px) {
          max-width: unset;
        }
        @media screen and (min-width: 1280px) {
          line-height: 50px;
        }
        &::first-letter {
          font-size: 36px;
          @media screen and (min-width: 1280px) {
            font-size: 48px;
            font-weight: 800;
          }
        }
      }
      p {
        font-size: 18px;
        color: var(--color-gray-1);
        font-weight: 300;
        font-family: Roboto-Light;
        max-width: 170px;
        line-height: 1.4;
        @media screen and (min-width: 768px) {
          max-width: unset;
        }
        @media screen and (min-width: 1280px) {
          font-size: 24px;
        }
      }
      .button-list {
        margin: 34px 0 14px;
      }
    }
  }
`;

export const Banner = ({ className }) => {
  return (
    <BannerWrapper className={className}>
      <div className='banner__innercontainer inner-container-1'>
        <div className='banner__left'>
          <small>Beyond the Bookshelf</small>
          <h1 className='title'>Verse, Ink and Quirks: Where Every Page Tells a Tale of Life's Eccentricities</h1>
          <p>Welcome to <span className='highlight'>&nbsp;&nbsp;Literary Labyrinth,&nbsp;&nbsp;</span> where curiosity meets insight. Our mission is to ignite your intellectual curiosity and inspire you to explore the fascinating wonders of the world.</p>
          <Row className='button-list' gap='33px' align='center'>
            <button className='primary'>Read More</button>
            <button className='asLink desktop-show'>Show Services</button>
          </Row>
        </div>
        <div className='banner__right'>
          <img className='leaf' src={LeafImage} alt='Hero' />
          <img className='hero' src={Hero} alt='Hero' />
        </div>
      </div>
    </BannerWrapper>
  )
}
