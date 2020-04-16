import React from 'react';

import './styles.css';
import Post from '../Post'

export default function Feed({ posts }) {
  return (
    <div className="container">
      <Post posts={posts} />
    </div>
  );
}
