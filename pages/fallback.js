import Head from "next/head";

export default function fallback() {
  return (
    <>
      <Head>
        <title>BooksBia | Download and Read Ebooks For Free</title>
      </Head>
      <div className="main-page">
        <h1>Seems you're offline!</h1>
        <h2>
          Please make sure your internet connection is okay to Download and Read
          Ebooks For Free
        </h2>
      </div>
      <style jsx>{`
        .main-page{
          background-color: white;
          height: 100vh;
          display: flex;
          flex-direction: column;
          text-align: center;
          align -items: center;
          justify-content: center;
           max-width: 800px;
          margin: auto;
          border: 1px solid rgb(199, 197, 197);
        }
      `}</style>
    </>
  );
}
