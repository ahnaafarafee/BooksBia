import firebase from "../../services/firebase";

const db = firebase.firestore();

export default function Series() {
  return <div>This is the series !</div>;
}

// export const getStaticProps = async (context) => {
//   const { slug } = context.params;
//   const res = await db.collection("books").where("slug", "==", slug).get();
//   const book = res.docs.map((book) => book.data());
//   if (book.length) {
//     return {
//       props: {
//         book: book[0],
//       },
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// };
// export async function getStaticPaths() {
//   const snapshot = await db.collection("books").get();

//   const paths = snapshot.docs.map((doc) => {
//     const { slug } = doc.data();

//     return {
//       params: { slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
