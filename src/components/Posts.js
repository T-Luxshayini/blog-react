import React from 'react';

import './posts.css';  
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';

function Posts() {
  return (
    // <div className='recent-posts'>
    //   <h2>Recent Posts</h2>
    // <ul>
    // <li><Link to="/post1">JavaScript</Link></li>
    //   <li><Link to="/post2">Data Structure</Link></li>
    //   <li><Link to="/post3">Algorithm</Link></li>
    //   <li><Link to="/post4">Computer Network</Link></li>
    //   </ul>
    // </div>
    <div className='arrow'>
    <Post1/>
    <Post2/>
    <Post3/>
    <Post4/></div>
  );
}

export default Posts;