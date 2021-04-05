import React, { forwardRef } from 'react';
import './BoxPost.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { BiHeart } from 'react-icons/bi';
import { BiMessageSquareDots } from 'react-icons/bi';

const BoxPost = forwardRef(
  ({ displayName, username, text, image, avatar }, ref) => {
    return (
      <div className="post bg-light" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">@{username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} class="img-post" alt="" />
          <div className="post__footer">
            <div className="space-icons">
              <BiHeart fontSize="25px" />
            </div>
            <BiMessageSquareDots fontSize="25px" />
          </div>
        </div>
      </div>
    );
  }
);

export default BoxPost;
