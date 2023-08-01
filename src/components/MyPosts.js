import React, { useEffect, useState } from 'react'
import { db } from '../firebase-configs';
import { collection, getDocs } from 'firebase/firestore';
import { Post } from './Post';

function MyPosts() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const renderPost = () => {
    return postList.map(post => <Post key={post.id} post={post} smp />);
  }

  return (
    <section>
      <h1>My Posts</h1>
      {renderPost()}
    </section>

  )

}

export default MyPosts
