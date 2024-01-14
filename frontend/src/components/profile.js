import React from 'react'
import styled from '@emotion/styled'
import { Row } from './layout/row';
import Flower from '../media/images/flower.svg';
import ButtonArrow from '../media/images/button-arrow.svg';
import ProfileImg from '../media/images/profile.png';

const ProfileWrapper = styled.div`
  background-image: url(${Flower});
  .inner-container {
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      gap: 60px;
      justify-content: space-between;
      padding: 0;
    }
    .profile__content {
      flex: 1;
      padding: 30px 152px 0 var(--padding-container);
      z-index: 1;

      @media screen and (min-width: 768px) {
        padding-right: 0;
        align-self: center;
      }
      @media screen and (min-width: 1024px) {
        max-width: 580px;
        >* {
          &:not(.profile__smalltitle ) {
            margin-left: 30px;
          }
        }
      }

      .profile__smalltitle {
        opacity: 0.8;
        margin-bottom: 8px;
      }

      .profile__title {
        text-transform: uppercase;
        position: relative;
        margin-bottom: 10px;
        span {
          &.dup {
            position: absolute;
            left: 4px;
            top: 4px;
            color: white;
            z-index: -1;
            text-shadow: -1px 1px 0 var(--color-theme), 
                          1px 1px 0 var(--color-theme), 
                         1px -1px 0 var(--color-theme), 
                        -1px -1px 0 var(--color-theme); 
          }
        }
      }

      .profile__subttitle {
        text-transform: uppercase;
        margin-bottom: 26px;
      }

      .profile__copy {
        color: var(--color-gray-2);
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        span {
          display: inline-block;
          margin-bottom: 24px;
        }
      }

      .profile__buttonlist {
        button {
          color: var(--color-theme-2);
          font-size: 16px;
          font-weight: 300;
          line-height: 139.336%;
          opacity: 0.5;
          line-height: 139.336%;
          position: relative;
          padding-bottom: 5px;
          padding-right: 15px;
          &:nth-of-type(1) {
            font-weight: 500;
            opacity: 1;
            :before {
              content: '';
              position: absolute;
              width: 100%;
              height: 10px;
              bottom: 0;
              left: 0;
              background-image: url(${ButtonArrow});
              background-repeat: no-repeat;
              background-position: right;
              transition: 0.3s ease;
            }
          }
          &:hover {
            font-weight: 500;
            opacity: 1;
            &:nth-of-type(1):before {
              transform: translateX(-8px);
            }
          }
        }
      }
    }
    
    .profile__image {
      position: absolute;
      width: 100%;
      right: 0;
      bottom: 0;
      text-align: right;
      background-color: var(--color-white);
      box-shadow: 0px 0px 16px 3px #ffffff;
      padding: 150px 0 24px;
      font-size: 0;
      img {
        width: 182px;
      }
      @media screen and (min-width: 768px) {
        box-shadow: none;
        width: 40%;
        padding: 50px 0 0;
        position: relative;
        img {
          position: relative;
          width: 100%;
          left: -50px;
          height: 100%;
          max-height: 600px;
        }
      }
      .profile__popularblog {
        position: absolute;
        top: 100px;
        right: 0;
        >div {
          flex-direction: column;
          button {
            align-self: flex-end;
            text-align: right;
            padding: 25px 37px;
            border-radius: 20px 0px 20px 20px;
            background: var(--color-white);
            box-shadow: -11px 0px 20px 0px rgba(0, 0, 0, 0.08);
            
            color: var(--color-gray-4);
            font-size: 11px;
            font-weight: 400;
            line-height: normal;
            text-transform: uppercase;
            &:nth-of-type(2) {
              color: var(--color-theme-3);
            }
          }
        }
        &.scroll-anim {
          transform: translateX(100%);
          opacity: 0;
          transition: 0.3s ease;
          &.active {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
`;

export const Profile = ({ className }) => {
  return (
    <ProfileWrapper className={className}>
      <Row className='inner-container'>
        <div className='profile__content'>
          <p className='profile__smalltitle smalltitle'>Меня зовут</p>
          <h2 className='profile__title title'><span>Жанат</span><span className='dup'>Жанат</span></h2>
          <p className='profile__subttitle subtitle'>Агдаулетова</p>
          <p className='profile__copy'><span>Я являюсь автором эксклюзивного метода естественной стимуляции волос. Абсолютно безвредный органический метод был создан на личном опыте. Спешу предупредить, что процедуры безболезненны, без использования инъекций, не вызывают аллергии, а также подходят беременным и кормящим матерям.</span> <span>Для начала хотелось бы уточнить, выпадение волос – это нормально и причин может быть много. Не нужно предпринимать безуспешные попытки, когда есть возможность решить проблему быстро и эффективно. Вместе мы сможем добиться потрясающего результата!</span></p>
          <div className='desktop-show'>
            <Row gap={'50px'} className='profile__buttonlist'>
              <button>Читать подробнее</button>
              <button>смотреть услуги</button>
            </Row>
          </div>
        </div>
        <div className='profile__image'>
          <img className='profile' src={ProfileImg} alt='Prfile' />
          <div className='desktop-show scroll-anim profile__popularblog'>
            <Row gap='20px'>
              <button>Лучшая в <br />своей области</button>
              <button>Бесплатные консультации <br />по всему кз</button>
            </Row>
          </div>
        </div>
      </Row>
    </ProfileWrapper>
  )
}
