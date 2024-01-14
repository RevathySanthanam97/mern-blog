import React from 'react'
import { BlogCard } from './blogCard'
import styled from '@emotion/styled'
import Mask1 from '../media/images/mask1.svg';
import Mask2 from '../media/images/mask2.svg';
import Mask3 from '../media/images/mask3.svg';
import Mask4 from '../media/images/mask4.svg';
import Mask5 from '../media/images/mask5.svg';

const BlogGridWrapper = styled.div`
  .grid__container {
    display: flex;
    gap: 35px;
    flex-wrap: wrap;
    .card__container {
      min-width: 300px;
      min-height: 230px;
      flex: 1;
      &:nth-of-type(5n) {
        .blogCard__image {
          width: 50%;
          position: relative;
          overflow: hidden;
          img {
            position: absolute;
            width: 100%;
          }
        }
      }
    }
    @media screen and (min-width: 1366px) {
      display: grid;
      grid-template-columns: repeat(3, minmax(240px, 1fr));

      .card__container {
        min-width: unset;
        &:nth-of-type(1) {
          grid-row: 1/4;
        }
        &:nth-of-type(2) {
          height: 293px;
        }
        &:nth-of-type(3) {
          height: 350px;
          grid-column: 3;
          .blogCard__title {
            -webkit-line-clamp: 1;
            min-height: 30px;
          }
        }
        &:nth-of-type(4) {
          height: 293px;
          margin-top: -68px;
          grid-row: 2/4;
        }
        &:nth-of-type(5) {
          height: 184px;
          grid-column: 3;
          margin-top: -5px;
          grid-row: 2/4;
        }
      }
      &:nth-of-type(even) {
        .card__container {
          &:nth-of-type(1) {
            grid-column: 3;
          }
          &:nth-of-type(3) {
            grid-column: 1;
            grid-row: 1/2;
          }
          &:nth-of-type(5) {
            grid-column: 1;
          }
        }
      }
      .card__container {
        .blogCard__title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 55px;
        }
        .blogCard__copy {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        img {
          min-width: 92px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          mask-size: cover;
          mask-repeat: no-repeat;
          mask-image: url(${Mask1});
        }
        &:nth-of-type(1) {
          flex-direction: column;
          .blogCard__image {
            width: 100%;
            height: 320px;
          }
        }
        &:nth-of-type(2) {
          .blogCard__image {
            img {
              mask-image: url(${Mask2});
            }
          }
        }
        &:nth-of-type(3) {
          flex-direction: column;
          .blogCard__image {
            width: 100%;
            height: 166px;
            img {
              mask-image: url(${Mask4});
            }
          }
        }
        &:nth-of-type(4) {
          flex-direction: row-reverse;
          .blogCard__image {
            img {
              mask-image: url(${Mask3});
            }
          }
        }
        &:nth-of-type(5) {
          .blogCard__image {
            img {
              mask-position: right;
              mask-image: url(${Mask5});
            }
          }
        }
      }
    }
    &:not(:last-child) {
      margin-bottom: 35px;
    }
  }
  .remaining-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 35px;
  }
`;

export const BlogGrid = ({ blogs }) => {
  const totalItems = blogs.length;
  const totalGrid = Math.floor(totalItems/5);
  const remaining = totalItems%5;

  return (
    <BlogGridWrapper className='grid__wrapper'>
      {[...Array(totalGrid)].map((_, i) => {
        return (
          <>
            <div key={i} className='grid__container'>
              {blogs?.slice(i * 5, ((i + 1) * 5)).map((item, i) => (
                <BlogCard
                  hideTags
                  key={item._id}
                  blog={item}
                />
              ))}
            </div>
          </>
        )}
      )}
      {remaining > 0 && (
        <>
          <div className='remaining-cards'>
            {blogs?.slice(totalGrid * 5, totalItems).map((item) => (
              <BlogCard
                hideTags
                key={item._id}
                blog={item}
              />
            ))}
          </div>
        </>
      )}
    </BlogGridWrapper>
  )
}
