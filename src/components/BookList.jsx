import BookShelf from "./BookShelf";
import useListBooks from "./../query-hooks/useListBooks";


const BookList = () => {

  const { data: books } = useListBooks();


  const currentlyReading = books?.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const read = books?.filter((book) => book.shelf === "read");
  const wantToRead = books?.filter((book) => book.shelf === "wantToRead");

  // const shelves = [
  //   {
  //     title: "Currently Reading",
  //     data: currentlyReading,
  //     match: "currentlyReading",
  //   },
  //   { title: "Want To Read", data: wantToRead, match: "wantToRead" },
  //   { title: "Read", data: read, match: "read" },
  // ];

  // return shelves.map((shelf) => (
  //   <BookShelf key={shelf.title} title={shelf.title} books={shelf.data} />
  // ));

  return (
    books ? (
      <>
        <BookShelf title="Currently Reading" books={currentlyReading} />
        <BookShelf title="Want To Read" books={wantToRead} />
        <BookShelf title="Read" books={read} />
      </>
    ) : ''

   
  );
};

export default BookList;
