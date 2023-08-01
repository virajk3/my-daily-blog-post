import React, { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-configs';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  let navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionRef,
      {
        date:new Date(),
        title,
        body,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
    navigate("/myPosts");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <div className="createPostPage">
      {" "}
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...' onChange={(event) => { setTitle(event.target.value) }} />
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(event) => { setBody(event.target.value) }} />
        </div>
        <button className='button' onClick={createPost}>Submit Post</button>
      </div>

    </div>
  );
}

export default CreatePost
