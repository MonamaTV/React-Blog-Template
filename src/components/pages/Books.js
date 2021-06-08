import React from 'react';
import Book from '../Book';
import '../Book.css';
import SearchBooks from '../forms/SearchBooks';


import zero_ from '../../assets/img/zero.PNG'
import cs_ from '../../assets/img/cs.PNG'
import am_ from '../../assets/img/5am.PNG'
import noah_ from '../../assets/img/Noah.PNG'

function Books() {
    
  const posts = [
    {id: 1, title: 'Born A Crime', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', rate: 4.4, img: noah_ },
    {id: 2, title: 'Computer Science Instilled', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', rate: 4.4, img: cs_ },
    {id: 3, title: 'Zero To One', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', rate: 4.4, img: zero_ },
    {id: 4, title: '5AM Club', info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', rate: 4.4, img: am_ }
  ]

    return (
        <div className="books-container">
          {/* <h4>Get Books To Read</h4>
          <SearchBooks /> */}
          {/* <Book/> */}
          {
              posts && posts.map((book) => (
                <Book book={book} key={book.id} />
              ))    
          }
        </div>
    )
}

export default Books;
