import React, { useState, useEffect } from 'react';
import BoxPost from '../BoxPost/index';
import Post from '../../PostArea/index';
import './feed.css';
import firebase from '../../Firebase/index';
import FlipMove from 'react-flip-move';
import { GrOrderedList } from 'react-icons/gr';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

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
