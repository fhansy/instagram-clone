import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar className='post__avatar'
                alt='username'
                src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-wash-2-1561136582.jpg' />
            <h3>Username</h3>
        </div>
        <img className='post__image' src="https://sleeklens.com/wp-content/uploads/2016/08/square00.jpg" alt="" />
        <h4 className='post__text'><strong>Username: </strong>Ini Caption</h4>
    </div>
  )
}

export default Post