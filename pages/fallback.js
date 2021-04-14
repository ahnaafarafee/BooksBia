import Head from "next/head";

export default function fallback() {
  return (
    <>
      <Head>
        <title>BooksBia | Download and Read Ebooks For Free</title>
      </Head>
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <h1>Seems you're offline!</h1>
        <h2>
          Please make sure your internet connection is okay to Download and Read
          Ebooks For Free
        </h2>
      </div>
    </>
  );
}
