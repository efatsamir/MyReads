import { useMutation, useQueryClient } from "react-query";
import { update } from "../BooksAPI";

export default function useUpdateBook() {

  const queryClient = useQueryClient();
 
  return useMutation(([book, shelf]) => update(book, shelf), {
    onSuccess: () => queryClient.invalidateQueries("books"),
  });
}
