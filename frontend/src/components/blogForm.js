import React, { useState } from 'react'
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { firebaseStorage } from '../firebase';
import { v4 as uuid } from 'uuid';

export const BlogForm = () => {
  const { user } = useAuthContext();
  const { dispatch } = useBlogContext();
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageUploadStatus, setImageUploadStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You Must be Logged In');
      return;
    }
    const blog = { title, tags, content, imageUrl };
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setTitle('');
      setTags('');
      setContent('');
      setImage(null);
      setError(null);
      console.log("Updated Successfully");
      setSuccess('Blogs Added Successfully');
      dispatch({ type: 'CREATE_BLOG', payload: json})
    }
  }

  const upload = (imageValue) => {
    const imageRef = storageRef(firebaseStorage, `blogs/${uuid()}`);
    uploadBytes(imageRef, imageValue)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then((url) => {
          setImageUrl(url);
          setImageUploadStatus('Image Uploaded Successfully');
        })
        .catch((error) => {
          console.log(error.message);
          setImageUploadStatus(`Couldn't Upload Image, ${error.message}`);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    upload(e.target.files[0]);
  }

  return (
    <div className='form_wrapper' onSubmit={(e) => handleSubmit(e)}>
      <form>
        <div><input placeholder="title" type='text' onChange={(e) => setTitle(e.target.value)} value={title} /></div>
        <div><input placeholder="tags" type='text' onChange={(e) => setTags(e.target.value)} value={tags} /></div>
        <div><input placeholder="content" type='text' onChange={(e) => setContent(e.target.value)} value={content} /></div>
        <div><input type="file" id="blog-image" name="blog-image" accept="image/png, image/jpeg"  onChange={(e) => handleImageUpload(e)} /></div>
        <img src={image && URL.createObjectURL(image)} alt='Preview-Blog' />
        {imageUploadStatus && <i>{imageUploadStatus}</i>}
        <button>Submit</button>
        <div>
          {error && <i>{error}</i>}
          {success && <i>{success}</i>}
        </div>
      </form>
    </div>
  )
}
