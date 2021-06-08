import React from 'react'
import Noah from '../assets/img/Noah.PNG'
function Book({ book }) {
    return (
        <div className="book-card">
            <div className="book-image">
                <img src={book.img} alt="Noah"/>
            </div>
            <div className="book-info">
                <small>Rating({book.rate})</small>
                <h3>{book.title}</h3>
                <small>By Trevor Noah</small>
                <p>{book.info}</p>
                <a href="">Open</a>
            </div>
        </div>
    )
}

export default Book;
