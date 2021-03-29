import React, { useState, useEffect } from "react";
import BoxPost from '../BoxPost/index'
import Post from "../../PostArea/index";
import "./feed.css";
import db from '../../Firebase/index'
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Post />

      <FlipMove>
        {posts.map((post) => (
          <BoxPost
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;