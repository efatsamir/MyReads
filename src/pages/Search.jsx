import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem";
import useSearchBook from "../query-hooks/useSearchBook";
import useListBooks from "../query-hooks/useListBooks";

const Search = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  const { data: books } = useListBooks();

  const [query, setQuery] = useState("");

  const { data } = useSearchBook(query);


  const changeHandler = (e) => {
    setQuery(e.target.value.trim());
  };

 
  const addShelf = (item) => {
      const bookWithShelf = books.find((b) => b.id === item.id);
      return bookWithShelf ? bookWithShelf.shelf : "none";
  }
    
 
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={navigateHandler}>
          Close
        </button>
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

          {data ? (
            data.error ? (
              <h5>No Matches found!</h5>
            ) : (
              
              data.map((book) => {
                 book.shelf = addShelf(book);
                return <ListItem key={book.id} book={book} />;
              })
            )
          ) : (
            ""
          )}

        </ol>
      </div>
    </div>
  );
};

export default Search;

////////////////////////////////////
//  const { data } = useQuery(
//    ["searchBook", query],
//    () => search(query),
//    { refetchOnWindowFocus: false, enabled: query !== '', cacheTime: 0 }
//  );
////////////////////////////////////////////
