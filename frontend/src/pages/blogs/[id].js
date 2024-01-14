import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  let { id } = useParams();
  const { user } = useAuthContext();
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`/api/blogs/${id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      if (response.ok) {
        console.log(json);
        setData(json);
      }
    }
    if (user) {
      fetchBlogs()
    }
  }, [user, id]);

  return (
    <div>
      <p>
        {data.createdAt}
      </p>
      <p>
        {data.tags}
      </p>
      <br/>
      <br/>
      <br/>
      {/* <img alt={data.title} src={data.imageUrl} /> */}
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </div>
  )
}

export default BlogDetailPage