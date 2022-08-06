import React, {  useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react/cjs/react.development';
import { search } from '../BooksAPI';
import BooksContext from '../store/books-context';
import ListItem from './ListItem';


const Search = () => {
  
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/');
  }

  const { books } = useContext(BooksContext);

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [noMatches, setNoMatches] = useState(false);


  const changeHandler = e => {
    // use setTimeout instead of Abortcontroller as we can't 
    // modify search query given by author to accept abortcontroller
    setTimeout(() => {
      setQuery(e.target.value.trim());
    }, 500);     
  }

  const addShelf = useCallback((item) => {
     const bookWithShelf = books.find(b => b.id === item.id);
     return bookWithShelf ? bookWithShelf.shelf : "none";
  },[books])

  useEffect(()=> {
     if(!query) return setData([]);

     setNoMatches(false);
    
     search(query)
       .then(res => {
          if(res.error) {
            setNoMatches(true);
            setData([]);
          }else {
            const searchRes = res.map(x => {
              x.shelf = addShelf(x);
              return x;
            } )
           
           
            setData(searchRes);
          }
       })
  }, [query, addShelf])

  
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={navigateHandler}>Close</button>
          <div className="search-books-input-wrapper">
           
            <input 
            type="text" 
            placeholder="Search by title or author"
            onChange={changeHandler}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
             { !noMatches && data.length > 0 && data.map(book => <ListItem key={book.id} book={book}  />) }
             { noMatches && <h1>No Matches Found!</h1>}
            
          </ol>
        </div>
      </div>
    )
}

export default Search;
