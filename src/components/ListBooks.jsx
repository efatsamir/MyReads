import React from 'react';
import Add from './Add';
import BookShelf from './BookShelf';
import Header from './Header';



const ListBooks = ({ books, updateShelf }) => {
  
  const currentlyReading=[];
  const read=[] ;
  const wantToRead=[];
  
  books.forEach(item => {
    if (item.shelf === 'currentlyReading') return currentlyReading.push(item);
    if (item.shelf === 'read') return read.push(item);
    if (item.shelf === 'wantToRead') return wantToRead.push(item);
  })

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
           { shelves.map(item => 
           <BookShelf 
           key={item.title} 
           title={item.title} 
           books={item.data}  
           updateShelf={updateShelf} 
           />
           )}
          </div>
        </div>

        <Add />
        </div>


    )
}

export default ListBooks
