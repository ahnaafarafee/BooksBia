import firebase from "../services/firebase";

export function postToJSON(bookData) {
  // const data = doc.data();

  return {
    ...bookData,
    // // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: bookData?.createdAt.toMillis() || 0,
    // updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

export async function getUserWithUsername(slug) {
  const booksRef = firebase.firestore().collection("books");
  const query = booksRef.where("slug", "==", slug).limit(1);
  const bookDoc = (await query.get()).docs[0];
  return bookDoc;
}
