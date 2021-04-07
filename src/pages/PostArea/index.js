import React, { useState } from 'react';
import './post.css';
import { ImFileVideo } from 'react-icons/im';
import { BsImages } from 'react-icons/bs';
import firebase from '../Firebase/index';
import { Avatar, Button } from '@material-ui/core';
function Post() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    const db = firebase.firestore();
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'fran',
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
        <div class="footer-post">
          <div class="footer-post-icons">
            <BsImages size={25} />
            <ImFileVideo size={25} />
          </div>
          <Button onClick={sendTweet} type="submit" class="btn btnPostar">
            Postar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Post;
