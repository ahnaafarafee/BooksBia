import { useState } from "react";
import Loader from "react-loader-spinner";
import firebase from "../services/firebase";

import Head from "next/head";

const db = firebase.firestore();

export default function contactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="blog-detail-page">
      <Head>
        <title> Contact | Deyal</title>
      </Head>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us 🤳</h1>
        <h3>
          Contact us if you have any questions or inquiries. Please put a valid
          email address, so that we can contact you afterwards. Be patient, our
          response could delay upto 12-24 working hours. Thank you.
        </h3>
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          className="cta"
          type="submit"
          // style={{ background: loader ? "#ccc" : "" }}
        >
          {loader ? (
            <Loader type="ThreeDots" color="#fff" height={50} width={50} />
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 400px;
          margin: 0 auto;
        }

        .form > h1 {
          margin-bottom: 30px;
          justify-content: center;
        }

        .form > h3 {
          border-bottom: 1px solid #b6b6b6;
        }

        .form > input,
        textarea {
          padding: 20px;
          border-radius: 3px;
          /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
          margin-bottom: 20px;
          border: 1px solid lightgray;
          /* border: none; */
          background: #fff;
          font-size: 16px;
          color: #17202a;
          outline: none;
        }

        .form > input:focus,
        textarea:focus {
          border: 1px solid #17202a;
        }

        .form > textarea {
          height: 150px;
          max-width: 400px;
          min-height: 100px;
        }

        .form > label {
          margin-top: 30px;
          padding-bottom: 10px;
          color: #17202a;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
