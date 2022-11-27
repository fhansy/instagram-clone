import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className='post'>
    <h3>Username</h3>
        <img className='post__image' src="https://sleeklens.com/wp-content/uploads/2016/08/square00.jpg" alt="" />
        <h4 className='post__text'><strong>Username: </strong>Ini Caption</h4>
    </div>
  )
}

export default Post