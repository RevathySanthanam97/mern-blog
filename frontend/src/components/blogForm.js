import React, { useState, useRef } from 'react'
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { firebaseStorage } from '../firebase';
import { v4 as uuid } from 'uuid';
import styled from '@emotion/styled'
import Placeholder from '../media/images/upload-placeholder.svg';
import { Editor } from '@tinymce/tinymce-react';
import { Row } from './layout/row';

const BlogFormWrapper = styled.div`
  margin: 50px auto;
  form {
    padding-top: 10px;
    .row-layout {
      margin-bottom: 30px;
      .form__top {
        flex: 1;
      }
      .form__preview-img {
        width: 300px;
        margin: auto;
        text-align: center;
        border: 1px solid var(--color-border);
        padding: 12px;
        img {
          object-fit: cover;
          opacity: 0.2;
          display: flex;
          margin: auto;
        }
      }
    }
  }
  .form__fields {
    input {
      width: 100%;
      border: none;
      border-bottom: 2px solid var(--color-border);
      padding: 4px 0;
    }
  }
  .form__fields, .tox {
    margin-bottom: 24px;
  }
  input[type=file]::file-selector-button {
    border: 1px solid var(--color-border);
    background-color: transparent;
    border-radius: 8px;
    padding: 8px;
    margin-right: 18px;
    width: 90px;
  }
`;

export const BlogForm = () => {
  const { user } = useAuthContext();
  const { dispatch } = useBlogContext();

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageUploadStatus, setImageUploadStatus] = useState(null);

  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You Must be Logged In');
      return;
    }
    const blog = { title, tags, content: editorRef.current.getContent(), imageUrl };
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
      console.log("Updated Successfully", json);
      setSuccess('Blogs Added Successfully');
      dispatch({ type: 'CREATE_BLOG', payload: json})
      setTitle('');
      setTags('');
      editorRef.current = '';
      setImage(null);
      setError(null);
    }
  }

  const upload = (imageValue) => {
    const imageRef = storageRef(firebaseStorage, `blogs/${uuid()}`);
    uploadBytes(imageRef, imageValue)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then((url) => {
          setImageUrl(url);
          setImageUploadStatus(true);
        })
        .catch((error) => {
          setImageUploadStatus(true);
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
    if (e.target.files[0] !== null) {
      upload(e.target.files[0]);
      setImageUploadStatus(true);
    }
  }

  return (
    <BlogFormWrapper className='form_wrapper inner-container-1' onSubmit={(e) => handleSubmit(e)}>
      <form>
        <Row gap='40px'>
          <div className='form__top'>
            <div className='form__fields form__title'>
              <input
                placeholder="Title"
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className='form__fields form__tags'>
              <input
                placeholder="Tags"
                type='text'
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </div>
          </div>
          <div className='form__preview-img'>
            <div className='form__image'>
              <img src={(image && URL.createObjectURL(image)) || Placeholder} alt='Preview-Blog' />
              <input
                type="file"
                id="blog-image"
                name="blog-image"
                accept="image/png,image/jpeg"
                onChange={(e) => handleImageUpload(e)}
              />
            </div>
          </div>
        </Row>
        <Editor
          apiKey='rkhf0whet0qsmxcm35bmjywlzvnswesbggmmu0fbykkrxs5e'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue=""
          init={{
            height: 500,
            menubar: "edit format insert table",
            menu: {
              insert: { title: 'Insert', items: 'image link' },
            },
            statusbar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button className='primary' disabled={!imageUploadStatus}>Submit</button>
        <div>
          {error && <i>{error}</i>}
          {success && <i>{success}</i>}
        </div>
      </form>
    </BlogFormWrapper>
  )
}
