import React, { useState } from 'react';

import './styles.css';

import api from '../../services/api';

function PostItem({ post }) {
  
  return (
    <div className="container-postitem">
        <header className="header">
          <img src={post.author.avatar} />
          <div className="infors">
            <span>{post.author.name}</span>
            <span>{post.date}</span>
          </div>
        </header>
    </div>
  );
}

export default function Feed() {
  const [posts, setPosts] = useState(api);

  return (
    <div className="container-feed">
      {posts.map(post => (
        <PostItem post={post}/>
      ))}
    </div>
  );
}
