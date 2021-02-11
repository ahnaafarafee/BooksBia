import Head from "next/head";
import Feature from "../components/Feature/feature";
// import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
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

      <main className="container">
        <Feature />
      </main>
    </div>
  );
}
