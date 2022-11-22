import {  useQuery } from "react-query";
import { search } from "../BooksAPI";

export default function useSearchBook(query) {

 return useQuery(["searchBook", query], () => search(query), {
    refetchOnWindowFocus: false,
    enabled: query !== "",
    cacheTime: 0,
  });
}
