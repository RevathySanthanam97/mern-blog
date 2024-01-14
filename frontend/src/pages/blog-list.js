import React, { useEffect } from 'react'
import { BlogGrid } from '../components/blogGrid';
import styled from '@emotion/styled'
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';

const ListWrapper = styled.div`
  margin: 40px auto 95px;
  .title-section {
    position: relative;
    min-height: 190px;
    margin-bottom: 50px;
    &::before {
      content:'' ;
      position: absolute;
      top: 0;
      left: 0;
      width: 189px;
      height: 189px;
      border-radius: 50%;
      background-color: var(--color-theme);
    }
    >* {
      position: relative;
      &:not(.smalltitle) {
        margin-left: 30px;
        margin-top: 10px;
      }
    }
    .smalltitle {
      padding-top: 32px;
    }
  }
`;

const List = ({ showTitle = false}) => {
  const {blogs, dispatch} = useBlogContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_BLOGS', payload: json});
      }
    }
    if (user) {
      fetchBlogs()
    }
  }, [dispatch, user])

  return (
    <ListWrapper className='inner-container-1'>
      {blogs?.length && (
        <>
          {showTitle && (
            <div className='title-section'>
              <p className='smalltitle'>Меня зовут</p>
              <h2 className='title'>Жанат</h2>
              <p className='subttitle'>Агдаулетова</p>
            </div>
          )}
          <BlogGrid blogs={blogs} />
        </>
      )}
    </ListWrapper>
  )
}

export default List