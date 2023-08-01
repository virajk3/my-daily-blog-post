import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase-configs';
import { useParams } from 'react-router-dom';
import { Post } from './Post';
import { Comment } from './Comments';
import { v4 as uuid } from 'uuid';



function SingleMyPost() {

    const [postList, setPostList] = useState([]);
    const postCollectionRef = collection(db, "posts");

    const params = useParams();
    const id = params.id;
    const [postComments, setPostComments] = useState([]);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => { if (id === doc.id) return { ...doc.data(), id: doc.id } }));
        };
        getPosts();
        const storedComment = JSON.parse(localStorage.getItem(`comments_${id}`) || '[]');
        setPostComments(storedComment);
    }, []);

    const renderPost = () => {
        return postList.map(post => (post && <Post key={post.id} post={post} />));
    }

    const renderComments = () => {
        return postComments.map(comment => (
            comment.postId === id &&
            <Comment key={comment.id} comment={comment} />
        ))
    }

    const handleAddComment = () => {
        const data = { email: auth.currentUser.displayName, body: comments, title: "", postId: id, id: uuid() };
        const updatedComments = [...postComments, data];
        localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        setPostComments(updatedComments);
        setComments('');
    };


    return (
        <section>
            <h1>My Posts</h1>
            {renderPost()}
            <h2>Comments</h2>
            <div className="">
                {" "}
                <div className=''>
                    <div className='inputGpCmt'>
                        <textarea placeholder='Comment...'
                            onChange={(event) => { setComments(event.target.value) }}
                            value={comments} />
                    </div>
                    <button className='button' style={{marginLeft:'38rem'}} onClick={handleAddComment} >Submit Comment</button>
                </div>

            </div>
            {renderComments()}

        </section>

    )
}

export default SingleMyPost