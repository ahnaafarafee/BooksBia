import Head from "next/head";
import Link from "next/link";
import firebase from "../services/firebase";

const storage = firebase.storage();

export default function writeInBlog() {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref("uploads/");
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      alert("Successfully Uploaded Your File 👍");
    });
  };
  return (
    <div className="blog-detail-page main">
      <Head>
        <title> Write Blog | Deyal</title>
      </Head>
      <div className="content">
        <h1>Write in Deyal</h1>
        <h3>
          You can submit your writing(poems, stories, book reviews, etc.) here.
          Select your writing and submit it to us. We will monitor it and
          publish it. If your submitted work does not publish, then please{" "}
          <Link href="/contact">
            <a style={{ color: "blue" }}>contact us</a>
          </Link>
          .{" "}
          <strong>
            Please select .docx or .txt file. Do not submit a PDF file.
          </strong>
        </h3>
        <hr />
        <input type="file" onChange={onChange} />
        <br />
        <h3>
          Or you can submit in our{" "}
          <a
            target="_blank"
            style={{ color: "blue" }}
            href="https://www.facebook.com/groups/readdeyal"
          >
            Facebook Group
          </a>
        </h3>
        <br />
        <br />
        <h3>
          Read awesome blog post daily!{" "}
          <Link href="/blog">
            <a>Click Here</a>
          </Link>
        </h3>
      </div>
      <style jsx>{`
        .main {
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .content {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
