import React from 'react';
import Add from './Add';
import BookShelf from './BookShelf';
import Header from './Header';



const BookList= ({ books, updateShelf }) => {
  
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const read = books.filter(book => book.shelf === 'read');
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');


  const shelves = [
     {title: 'Currently Reading', data: currentlyReading },
     {title: 'Want To Read', data: wantToRead},
     { title: 'Read', data: read}
  ];


    return (
      <div className="list-books">
        <Header />
         
        <div className="list-books-content">
          <div>
           { shelves.map(shelf => 
           <BookShelf 
              key={shelf.title} 
              title={shelf.title} 
              books={shelf.data}  
              updateShelf={updateShelf} 
           />
           )}
          </div>
        </div>

        <Add />
        </div>


    )
}

export default BookList
