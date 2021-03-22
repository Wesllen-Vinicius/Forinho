import React from "react";
import "../PostArea/post.css"
const Post = () => (
    <div class="post">  
        <div class="avatar"> 
            <img src="https://yt3.ggpht.com/ytc/AAUvwnh1iotPKCf7o_L6BhrU8klhUsstHCuX0I4-Jwzlow=s900-c-k-c0x00ffffff-no-rj" />
            </div> 
        <div class="input-group textLabel"> 
            <textarea class="form-control" aria-label="With textarea" placeholder="#Post"></textarea>
        </div>

        <div class="botaoPost">
            <button type="button" class="btn btn-dark " > Postar </button>
        </div>

        
    </div>
    
);

export default Post;