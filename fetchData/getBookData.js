import firebase from "../services/firebase";

export function postToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    // // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    added: data?.added.toMillis() || 0,
    // updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

export async function getUserWithUsername(name) {
  const booksRef = firebase.firestore().collection("books");
  const query = booksRef.where("name", "==", name).limit(1);
  const bookDoc = (await query.get()).docs[0];
  return bookDoc;
}
