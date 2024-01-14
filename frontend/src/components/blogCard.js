import React from 'react'
import styled from '@emotion/styled'
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { Row } from './layout/row';
import Hero from '../media/images/hero-image.jpg';

const BlogCardWrapper = styled.div`
  border-radius: 20px;
  background: var(--color-white);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  overflow: hidden;
  .blogCard__image {
    width: 150px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .blogCard__content {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (min-width: 1024px) {
      padding: 20px;
    }

    .blogCard__title {
      font-size: 24px;
      font-weight: 500;
    }

    .blogCard__copy {
      font-size: 14px;
      img {
        display: none;
      }
      ol {
        margin-left: 16px;
      }
    }
    .blogCard__buttonlist {
      font-size: 14px;
      margin-top: 6px;
      opacity: 0.5;
      button {
        align-self: flex-start;
      }
    }
  }
`;

export const BlogCard = ({ blog, hideTags }) => {
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

  return (
    <BlogCardWrapper className='child card__container'>
        <div className='blogCard__image'>
          <a className='plain' href={`/blogs/${blog._id}`}>
            {blog.imageUrl !== null && (
              <img alt='Blog' src={blog.imageUrl || Hero} />
            )}
          </a>
        </div>
        <div className='blogCard__content'>
          <h3 className='blogCard__title'>{blog.title}</h3>
          {!hideTags && <p>Tags: {blog.tags}</p>}
          <p className='blogCard__copy' dangerouslySetInnerHTML={{__html: blog.content}} />
          <Row gap='16px' className='blogCard__buttonlist'>
            <button onClick={(e) => handleEdit(e)}>Edit</button>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </Row>
        </div>
    </BlogCardWrapper>
  )
}
