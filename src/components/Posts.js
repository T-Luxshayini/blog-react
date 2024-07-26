import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';  // Import the CSS file for the Posts component

function Posts() {
  return (
    <div className='recent-posts'>
      <h2>Recent Posts</h2>
      <ul>
      <li><Link to="/post1">JavaScript</Link></li>
        <li><Link to="/post2">Data Structure</Link></li>
        <li><Link to="/post3">Algorithm</Link></li>
        <li><Link to="/post4">Computer Network</Link></li>
      </ul>
    </div>
  );
}

export default Posts;