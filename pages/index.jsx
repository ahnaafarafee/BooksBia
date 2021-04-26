import { useContext, useState } from "react";
import Feature from "../components/Feature/Feature";
import MainContent from "../components/MainContent/MainContent";
import { NewAddedBookContext } from "../fetchData/context/NewAddedBookContext";

export default function Home() {
  const [newBooks, setNewBooks] = useContext(NewAddedBookContext);
  const [searchItem, setSearchItem] = useState("");

  const filterBooks = newBooks.filter((books) =>
    books.book.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <main className="container">
        <Feature />
        <input
          placeholder="search books"
          onChange={(event) => setSearchItem(event.target.value)}
        />

        {searchItem == "" ? (
          <MainContent />
        ) : (
          filterBooks.map((filBook) => <p>{filBook.book.name}</p>)
        )}
      </main>
    </div>
  );
}
