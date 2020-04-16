import React from 'react';

import './styles.css'

export default function Post({ posts }) {
  return (
    <div className="post">
      {posts.map(post => (
        <div className="container">
        <div className="header">
          <div>
            <img src={post.author.avatar} className="profile"/>
          </div>
          <div className="infor-profile">
            <span id="name" >{post.author.name}</span>
            <span id="date" >{post.date}</span>
          </div>

        </div>
        <span>Pessoal isso que estão falando sobre mim, é verdade</span>
        </div>
      ))}
    </div>  
  );
}


// {posts.map(post => (
//   <div clasName="post">  
//   <div className="author">
//     <div>
//       <img src={post.author.avatar} className="profile"/>
//     </div>
//     <div className="infor-profile">
//       <span>{post.author.name}</span>
//       <span>{post.date}</span>
//     </div>
//   </div>
// ))}
// </div