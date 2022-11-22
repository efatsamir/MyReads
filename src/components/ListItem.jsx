import React, { useState } from "react";
import useUpdateBook from "./../query-hooks/useUpdateShelf";


const ListItem = ({ book }) => {
  
  const [shelf, setShelf] = useState(book.shelf);

  const { mutate } = useUpdateBook();

  const imgURL = `url(${
    book.imageLinks ? book.imageLinks.smallThumbnail : ""
  })`;

  const changeHandler = (e) => {
    setShelf(e.target.value);
    mutate([book, e.target.value]);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: imgURL }}
          ></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={changeHandler}>
              <option value="move" disabled>
                Move to...
              </option>
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
  );
};

export default ListItem;
