import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BooksBia | Download and Read Ebooks For Free</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Read Bengali Books Online Free. BooksBia is online Bengali books reading library. You can download all Bengali books in PDF."
        />
        <meta
          name="keywords"
          content="books, ebook, pdf, bangla, bengali books, humayun ahmed"
        />
      </Head>

      <h1>Finally 😁💔</h1>
    </div>
  );
}
