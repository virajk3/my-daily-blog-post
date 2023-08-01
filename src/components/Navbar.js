import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => (
   <nav>
      <section>
         <Link to="/">Home</Link>
         {props.isAuth && <>
            <Link to="/createpost">Create Post</Link>
            <Link to="/myPosts">My Post</Link>
         </>}
         {!props.isAuth ? <Link to="/login" className="button blue">Login</Link> :
            <button className='button logout' onClick={props.signUserOut}>Sign Out</button>}
      </section>
   </nav>
)
