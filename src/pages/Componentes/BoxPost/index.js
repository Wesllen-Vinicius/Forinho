import React, { forwardRef } from 'react';
import './BoxPost.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const BoxPost = forwardRef(
  ({ displayName, username, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
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
          <img src={image} alt="" />
          <div className="post__footer">
            <div className="space_icons">
              <FavoriteBorderIcon fontSize="default" />
            </div>
            <ChatBubbleOutlineIcon fontSize="default" />
          </div>
        </div>
      </div>
    );
  }
);

export default BoxPost;
