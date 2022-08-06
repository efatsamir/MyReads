import { GET_BOOKS  } from './books-action';


const booksReducer = (state, action) => {
  switch(action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload  }
    default:
      return { ...state }
  }

}

export default booksReducer;