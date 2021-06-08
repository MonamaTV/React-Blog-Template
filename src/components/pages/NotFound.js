import React from 'react'
import '../Loading.css'
function NotFound() {
    return (
        <div className="loading">
            <h1>Error☹</h1>
            <p>We could not find what you looking for...</p>
            <br/>
            <br/>
            <a href="/">Go back home</a>
        </div>
    )
}

export default NotFound;
