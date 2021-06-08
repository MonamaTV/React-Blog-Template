import React from 'react';
import './Post.css';
import { useHistory } from 'react-router-dom'

function Post({ post }) {
    

    return (
        <div className="post-card">
            <div className="post-image">
               <img src={post.imageUrl} alt="selflessness"/>
            </div>
            <div className="post-body">
                <h5><a href="/post">{post.title}</a></h5>
                <small className="p-0 tags">#journey | #personal</small>
                <small className="p-0 time-tag">18 hrs ago</small>  
            </div>
        </div>
    )
}
export default Post;
