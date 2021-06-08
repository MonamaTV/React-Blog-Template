import React from 'react';
import './Post.css';
import MainImage from '../assets/img/time.jpg';

// It randomizes blog posts
function MainPost({ post }) {
    return (
        <div className="main-post">
            <div className="main-post-image">
                <img src={MainImage} alt="main post"/>
            </div>
            <div className="post-body">
                <small className="p-0 tags">#personal</small>
                <h4>{post.title}</h4>
                <small>Lorem Ipsum is simply dummy text of what what that we don't know...</small>
                <a href="/post">Read More</a>   
            </div>
        </div>
    )
}
export default MainPost;
