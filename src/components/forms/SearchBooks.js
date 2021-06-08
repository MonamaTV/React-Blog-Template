import React from 'react'
import './SearchForm.css'
function SearchBooks() {
    return (
        <div className="search-books">
            <form>
                <div className="search-book">
                   <input 
                        placeholder="Start searching..."
                        autoFocus 
                        type="search" 
                        style={{display: 'inline'}} 
                        />
                </div>
            </form>
        </div>
    )
}

export default SearchBooks
