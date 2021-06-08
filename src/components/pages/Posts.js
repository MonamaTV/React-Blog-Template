import React from 'react';
import Post from '../Post';


function Posts({ posts }) {
    return (
        <div className="posts-container"> 
            {
                posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))
            }
        </div>
    )
}
export default Posts;
