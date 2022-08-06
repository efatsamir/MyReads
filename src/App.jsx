import './App.css';
import BookList from './components/BookList';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';



const App = () => {
     
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<BookList  />}  />
                <Route path='/search' element={<Search   />} />
            </Routes>
        </div>
    )
}

export default App;
