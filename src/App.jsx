import React, { useEffect, useState } from 'react';
import './App.css';
import ListBooks from './components/ListBooks';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';




const App = () => {
     
    const [books, setBooks] = useState([]);

    const updateShelf = (book, targetShelf) => {
        BooksAPI.update(book, targetShelf)
        .then(() => BooksAPI.getAll().then(res => setBooks(res)))  
        
    }

    useEffect(() => {
        BooksAPI.getAll()
        .then(res => setBooks(res))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className='app'>
            
            <Routes>
                <Route path='/' element={<ListBooks  books={books}  updateShelf={updateShelf}  />}  />
                <Route path='/search' element={<Search  updateShelf={updateShelf}  books={books} />} />
            </Routes>
        </div>
    )
}

export default App;
