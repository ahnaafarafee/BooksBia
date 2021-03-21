import Head from "next/head";

import firebase from "../../services/firebase";

import classes from "../../styles/authors.module.scss";

const db = firebase.firestore();

export default function Author(props) {
  const { author } = props;

  return (
    <>
      <Head>
        <title>{author.name} | BooksBia</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className={classes.imageBox}>
              <img
                className={classes.img}
                src={author.photoUrl}
                alt={author.name}
              />
              <span className={classes.header}>{author.name}</span>
            </div>
            <div className={classes.description}>{author.about}</div>
          </div>
          <div className="col-lg-4">Small Col</div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("authors").where("slug", "==", slug).get();
  const author = res.docs.map((author) => author.data());
  if (author.length) {
    return {
      props: {
        author: author[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export async function getStaticPaths() {
  const snapshot = await db.collection("authors").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug } = doc.data();

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
