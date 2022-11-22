import React from "react";
import Header from "./../components/Header";
import Add from "./../components/Add";
import BookList from "../components/BookList";


const Home = () => {

  return (
    <div className="list-books">
      <Header />

      <div className="list-books-content">
        <div>
          <BookList  />
        </div>
      </div>

      <Add />
    </div>
  );
};

export default Home;
