
import { useReducer, useEffect, useCallback } from 'react';
import { getAll, update } from '../BooksAPI';
import { GET_BOOKS } from './books-action';
import BooksContext from './books-context'
import booksReducer from './books-reducer';




const initialState = {
  books: []
}


const BooksProvider = props => {
  
 
  const [state, dispatch] = useReducer(booksReducer, initialState); 

  

// get books 
const listBooks = useCallback(() => {
     getAll().then(res => {
      dispatch({ type: GET_BOOKS, payload: res })
     })
}, [])


// update book
const updateBook = (book, targetShelf) => {
    update(book, targetShelf).then(() => {
      getAll().then(res => {
        dispatch({ type: GET_BOOKS, payload: res })
      })
   })
}


  useEffect(() => {
    listBooks();
  }, [listBooks])

  const booksContext = {
    books: state.books,
    listBooks: listBooks,
    updateBook: updateBook
  }


  return (
    <BooksContext.Provider value={ booksContext } >
      { props.children }
    </BooksContext.Provider>
  )
}



export default BooksProvider