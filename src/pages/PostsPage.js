import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'
import { CSVLink } from 'react-csv';
import axios from 'axios';
import JSZip from 'jszip';
import Papa from "papaparse";
import { saveAs } from "file-saver/src/FileSaver";




const headers = [
  { label: "userId", key: "userId" },
  { label: "id", key: "id" },
  { label: "title", key: "title" },
  { label: "body", key: "body" }
];

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(fetchPosts())
    fetchData();
  }, [dispatch])

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => alert("Error happened"));
  };


  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

    return posts.map(post => <Post key={post.id} post={post} excerpt />)
  }

  const generateZip = () => {

    const parsedCSVData = Papa.unparse(data);
    console.log("parsedCSVData is:" + parsedCSVData)
    exportCSVdata(
      parsedCSVData,
      "data.csv",
      "text/csv;charset=utf-8;"
    );
  }
  const exportCSVdata = (data, fileName, type) => {
    console.log("inside exportCSVdata");
    //const blob = new Blob([data], { type });
    // const url = window.URL.createObjectURL(blob);
    var zip = new JSZip();
    zip.file(fileName, data);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "example.zip");
    });

  };

  return (
    <section>
      <div>
        <CSVLink data={data} headers={headers} filename="my-posts.csv">
          <button className="button bgColorBlue">Export CSV</button>
        </CSVLink>
        <button className="button bgColorBlue" onClick={generateZip}>Zip it</button>
        <h1 >Posts</h1>
      </div>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)
