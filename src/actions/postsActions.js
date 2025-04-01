import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPosts = () => ({ type: GET_POSTS });
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE });

export function fetchPosts() {
  const token = localStorage.getItem("token");
  console.log("token received");

  return async dispatch => {
    dispatch(getPosts());

    // try {
    //   // Fetching posts from jsonplaceholder
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   const data = await response.json();
    //   dispatch(getPostsSuccess(data));
    // } catch (error) {
    //   dispatch(getPostsFailure());
    // }

    try {
      // Fetching posts from localhost with axios
      const { data } = await axios.get("http://localhost:8080/blog-posts", {
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch(getPostsSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(getPostsFailure());
      alert("Error happened");
    }
  };
}