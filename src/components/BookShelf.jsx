import React from 'react';
import ListItem from './ListItem';


const BookShelf = (props) => {
  
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
             { props.books.map(book => <ListItem key={book.id} book={book} updateShelf={props.updateShelf} />) }
          </ol>
        </div>
      </div>
    )
}

export default BookShelf
