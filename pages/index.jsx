import { useContext, useState } from "react";

import Feature from "../components/Feature/Feature";
import Filter from "../components/Filter/Filter";
import Input from "../components/Input/Input";
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
        <Input
          handleChange={(event) => setSearchItem(event.target.value)}
          handleClear={() => setSearchItem("")}
        />

        <div className={searchItem == "" ? "" : "fil-container"}>
          {searchItem == "" ? (
            <MainContent />
          ) : (
            filterBooks.map((filBook) => (
              <Filter
                key={filBook.id}
                imageUrl={filBook.book.imageUrl}
                name={filBook.book.name}
                author={filBook.book.author}
                slug={filBook.book.slug}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
