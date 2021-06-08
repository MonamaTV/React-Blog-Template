import React, { useState } from 'react';
import './Comment.css';
function Comment() {

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="leave-comment-container ">
            <form >
                <p>Leave a comment</p>
                <div className="input-group">
                    <input 
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="input-group">
                    <input 
                        onChange={(e) => setComment(e.target.value)}
                        type="text"/>
                </div>
                <div className="input-group">
                    <button onClick={handleOnSubmit}>
                        Leave Comment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Comment;
