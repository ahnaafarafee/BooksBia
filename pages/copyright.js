import Head from "next/head";
import Link from "next/link";

export default function copyright() {
  return (
    <div className="blog-detail-page">
      <Head>
        <title> Copyright Declaimer | Booksbia</title>
      </Head>
      <h1>Copyright Declaimer</h1>
      <h4>
        BooksBia is a free online E-book library. We respect copyright issues.
        We have collected PDFs and links from the internet. We do not want any
        harm to copyright holders, we respect their hard work. We just want to
        make sure that those who can not afford to buy books can read their
        desired books for free. IF YOU CAN AFFORD TO BUY THESE BOOKS, PLEASE DO
        NOT DOWNLOAD EBOOKS FROM OUR SITE. If you are the
        author/publisher/copyright holder of any of these books published on our
        website, and you want to take down our books please inform us at{" "}
        <strong>booksbiaeditor@gmail.com</strong>, We would immediately remove
        your copyrighted materials from our site.
        <Link href="/contact">
          <a style={{ color: "blue" }}>Contact us</a>
        </Link>
      </h4>
    </div>
  );
}
