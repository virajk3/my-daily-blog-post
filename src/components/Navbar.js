import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => (
   <nav>
      <section>
         <Link to="/">Home</Link>
         {props.isAuth && <>
            <Link exact to="/createpost" className='active'>Create Post</Link>
            <Link exact to="/myPosts" className={({isActive}) => (isActive ? "active-style" : 'none')}>My Post</Link>
         </>}
         {!props.isAuth ? <Link exact to="/login" className="button blue" >Login</Link> :
            <button className='button logout' onClick={props.signUserOut}>Sign Out</button>}
      </section>
   </nav>
)
