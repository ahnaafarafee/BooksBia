import { createContext, useEffect, useState } from "react";

import firebase from "../../services/firebase";

const db = firebase.firestore();

export const NewAddedBookContext = createContext();

export const NewAddedBookProvider = (props) => {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    db.collection("books").onSnapshot((snapshot) =>
      setNewBooks(
        snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
      )
    );
  }, []);

  return (
    <NewAddedBookContext.Provider value={[newBooks, setNewBooks]}>
      {props.children}
    </NewAddedBookContext.Provider>
  );
};
