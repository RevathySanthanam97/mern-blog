import React, { useEffect } from 'react'
import { BlogGrid } from '../components/blogGrid';
import { BlogForm } from '../components/blogForm';
import styled from '@emotion/styled'
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';

const ListWrapper = styled.div`
`;

const List = () => {
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
    <ListWrapper>
      <BlogForm />
      {blogs.length && (
        <>
          <h1>Blogs</h1>
          <BlogGrid blogs={blogs} />
        </>
      )}
    </ListWrapper>
  )
}

export default List