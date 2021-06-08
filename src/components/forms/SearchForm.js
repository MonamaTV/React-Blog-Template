import React from 'react'
import './SearchForm.css'
function SearchForm({ searchPosts, handleSubmit }) {
    return (
        <div className="search-post">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                placeholder="Start typing..."
                autoFocus 
                type="search" 
                style={{display: 'inline'}} 
                onChange={(e) => searchPosts(e)}
                />
            </form>
        </div>
    )
}
export default SearchForm
