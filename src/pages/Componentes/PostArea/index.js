import React from "react";
import "../PostArea/post.css";
import { FiImage } from "react-icons/fi";
const Post = () => (
  <div class="grid-container">
    <div class="Avatar">
      <img src="https://yt3.ggpht.com/ytc/AAUvwnh1iotPKCf7o_L6BhrU8klhUsstHCuX0I4-Jwzlow=s900-c-k-c0x00ffffff-no-rj" />
    </div>
    <div class="Input">
      <textarea aria-label="With textarea" placeholder="#Post"></textarea>
    </div>
    <div class="botoesIMG">
      <button class=" butaoImagemIco">
        <FiImage size={30} />
      </button>
    </div>
    <div class="botaoGif"></div>
    <div class="botaoEmoji"></div>
    <div class="botaoPostar">
      <button type="button" class="btn btn-dark ">
        Postar
      </button>
    </div>
  </div>
);

export default Post;
