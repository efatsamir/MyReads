
import { useQuery } from 'react-query';
import { getAll } from '../BooksAPI';


export default function useListBooks () {
  return useQuery("books", getAll, {
    keepPreviousData: true,
    refetchOnWindowFocus: false
  });
};
