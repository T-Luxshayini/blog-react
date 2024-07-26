import React from 'react';
import './posts.css';  // Import the CSS file for the post component
import image4 from '/home/uki-jaffna/Documents/blog2/src/components/Computer-Network-Components.jpeg';

function Post4() {
  return (
    <div className="post">
      <img src={image4} alt="Data Structure" className="post-image" />
      <div className="post-content">
        <h2>Computer Networks</h2>
        <p>
        A computer network is a set of computers sharing resources located on or provided by network nodes. Computers use common communication protocols over digital interconnections to communicate with each other. These interconnections are made up of telecommunication network technologies based on physically wired, optical, and wireless radio-frequency methods that may be arranged in a variety of network topologies.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default Post4;
