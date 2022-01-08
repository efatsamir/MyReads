import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react/cjs/react.development';
import * as BooksAPI from '../BooksAPI';
import ListItem from './ListItem';
import Spinner from './Spinner';

const Search = ({ updateShelf, books }) => {
  
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/');
  }

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [noMatches, setNoMatches] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = e => {
    setQuery(e.target.value.trim());
         
  }

  const addShelf = useCallback((item) => {
     const bookWithShelf = books.find(b => b.id === item.id);
     return bookWithShelf ? bookWithShelf.shelf : "none";
  },[books])

  useEffect(()=> {
     if(!query) return setData([]);

     setNoMatches(false);
     setIsLoading(true);
     BooksAPI.search(query)
       .then(res => {
          if(res.error) {
            setNoMatches(true);
            setIsLoading(false);
            setData([]);
          }else {
            const searchRes = res.map(x => {
              x.shelf = addShelf(x);
              return x;
            } )
           
            setIsLoading(false);
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
             { isLoading && <Spinner /> }
             { !noMatches && data.length > 0 && data.map(book => <ListItem key={book.id} book={book} updateShelf={updateShelf} />) }
             { noMatches && <h1>No Matches Found!</h1>}
            
          </ol>
        </div>
      </div>
    )
}

export default Search;
