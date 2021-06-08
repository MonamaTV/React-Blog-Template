import React from 'react';
import '../Post.css'
import { useParams } from 'react-router-dom'
function Search() {
    const { query }  = useParams()
    console.log(query)
    return (
        <div className="blog-post-container">
            <p>Results for "{query}"</p>
        </div>
    )
}

export default Search;
