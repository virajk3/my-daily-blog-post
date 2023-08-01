import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ post, excerpt, smp }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2>{post.title}</h2>
    <p>{excerpt || smp ? post.body.substring(0, 100) : post.body}</p>

    {excerpt && (
      <Link to={`/posts/${post.id}`}
        className="button">
        View Post
      </Link>
    )}
    {smp && (
      <Link to={`/smp/${post.id}`}
        // state={{from : `${post.id}`}}
        className="button">
        View Post
      </Link>
    )}
  </article>
)
