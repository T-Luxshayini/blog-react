import React from 'react';
import { Link } from 'react-router-dom';
import './BlogNav.css';  
import logo from '/home/uki-jaffna/Documents/blog2/src/components/images (2).jpeg';

function BlogNav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Blog Platform</h1>
      </div>
      <ul className="nav-items">
      <li><Link to="/post1">JavaScript</Link></li>
        <li><Link to="/post2">Data Structure</Link></li>
        <li><Link to="/post3">Algorithm</Link></li>
        <li><Link to="/post4">Computer Network</Link></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default BlogNav;
