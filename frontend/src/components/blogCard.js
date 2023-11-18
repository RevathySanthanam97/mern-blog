import React from 'react'
import styled from '@emotion/styled'
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';

const BlogCardWrapper = styled.div`
  box-shadow: 0px 0px 7px 0px #0000002b;
  padding: 20px;
`;

export const BlogCard = ({ blog }) => {
  const { dispatch } = useBlogContext();
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    if (!user) {
      return;
    }
    
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
  
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: 'DELETE_BLOG', payload: json})
    }
  }
  const handleEdit = (e) => {
    console.log('edit')
  }
  console.log('imageurl', blog);
  return (
    <BlogCardWrapper className='card__container'>
      <div>
        <h4>{blog.title}</h4>
        {blog.imageUrl !== null && (
          <img src={blog.imageUrl} />
        )}
        <p>Tags: {blog.tags}</p>
        <p>content: {blog.content}</p>
        <button onClick={() => handleDelete(blog._id)}>Delete</button>
        <button onClick={(e) => handleEdit(e)}>Edit</button>
      </div>
    </BlogCardWrapper>
  )
}
