import React from 'react'
import { BlogCard } from './blogCard'
import styled from '@emotion/styled'

const BlogGridWrapper = styled.div`
  .grid__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 80px;
  }
`;

export const BlogGrid = ({ blogs }) => {
  return (
    <BlogGridWrapper className='grid__wrapper'>
      <h2>BlogGrid</h2>
      <div className='grid__container'>
        {blogs?.map((item) => (
          <BlogCard key={item._id} blog={item} />
        ))}
      </div>
    </BlogGridWrapper>
  )
}
