import React from 'react'
import { Link } from 'react-router-dom'
import PostsPage from './PostsPage'



const DashboardPage = (props) => (
  <section>
    {/* {props.isAuth && <Link to="/posts" className="button">
      View Posts
    </Link>} */}
    {props.isAuth && <PostsPage/>}
  </section>
)

export default DashboardPage
