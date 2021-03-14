
import firebase from "../../services/firebase";

export const getStaticProps = async (context) => {
  const db = firebase.firestore();
  const { slug } = context.params;
  const res = await db.collection("books").where("slug", "==", slug).get();
  const book = res.docs.map((book) => book.data());
  if (book.length) {
    return {
      props: {
        book: book[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
export async function getStaticPaths() {
  const snapshot = await firebase.firestore().collection("books").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug } = doc.data();

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export default function bookDetails(props) {
  console.log(props);
  return (
    <div>
      <h1>Book Details Page!!!</h1>
    </div>
  );
}
