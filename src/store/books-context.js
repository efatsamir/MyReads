import { createContext } from "react";


const BooksContext = createContext({
  books: [],
  isLoading: false,
  error: null,
  listBooks: () => {},
  updateBook: (book, targetShelf) => {}
})

export default BooksContext;


