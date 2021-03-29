import React, { useState } from 'react';
import './post.css';
import { FiImage } from 'react-icons/fi';
import firebase from '../Firebase/index';
import { Avatar, Button } from '@material-ui/core';
function Post() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    const db = firebase.firestore();
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Wesllen',
      username: 'Wes',
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnh1iotPKCf7o_L6BhrU8klhUsstHCuX0I4-Jwzlow=s900-c-k-c0x00ffffff-no-rj" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Qual a Boa?"
            type="text"
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Postar
        </Button>
      </form>
    </div>
  );
}

export default Post;
