import { getAll } from './BooksAPI'
import {   useState } from 'react';


const useFetch = () => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
   

     getAll()
      .then(res => {
          setIsLoading(false);
         setError(null);
          setData(res);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      }
    )


  return {
     isLoading,
     error,
    data
  }
}

export default useFetch;