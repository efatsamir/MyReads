import React, { useContext, useState } from 'react';
import BooksContext from '../store/books-context';

const ListItem = ({ book, setShelfUpdate, updateShelf }) => {

  const [shelf, setShelf] = useState(book.shelf);

  const { updateBook } = useContext(BooksContext)

  const imgURL = `url(${ book.imageLinks ? book.imageLinks.smallThumbnail : '' })`;


  const changeHandler = (e) => {
     setShelf(e.target.value);
     updateBook(book, e.target.value);

  }
  

    
    return (
        <li >
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURL }}></div>
            <div className="book-shelf-changer">
              <select value={ shelf } onChange={ changeHandler }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
}

export default ListItem
