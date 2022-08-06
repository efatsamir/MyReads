import React, { useContext } from 'react';
import BooksContext from '../store/books-context';
import Add from './Add';
import BookShelf from './BookShelf';
import Header from './Header';



const BookList= () => {



  const { books } = useContext(BooksContext);
 

 
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const read = books.filter(book => book.shelf === 'read');
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');


  const shelves = [
     {title: 'Currently Reading', data: currentlyReading, match: 'currentlyReading' },
     {title: 'Want To Read', data: wantToRead, match: 'wantToRead'},
     { title: 'Read', data: read, match: 'read'}
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
             
              
           />
           )}
          </div>
        </div>

        <Add />
        </div>


    )
}

export default BookList
