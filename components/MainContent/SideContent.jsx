import { useContext } from "react";

import Loader from "react-loader-spinner";

import SideContentHead from "../SideContentHead/SideContentHead";
import SideContentBooks from "./sideContentBooks";

import { NewAddedBookContext } from "../../fetchData/context/NewAddedBookContext";

export default function SideContent() {
  const [newBooks, setNewBooks] = useContext(NewAddedBookContext);
  return (
    <>
      <div className="side-content">
        <SideContentHead />
        <div className="side-content__main">
          <div className="side-content__row">
            {newBooks.length ? (
              newBooks.map(({ id, book }, index) => {
                if (index <= 20) {
                  return (
                    <SideContentBooks
                      key={id}
                      imageUrl={book?.imageUrl}
                      name={book?.name}
                      author={book?.author}
                      slug={book?.slug}
                      createdAt={book?.createdAt}
                    />
                  );
                }
              })
            ) : (
              <div style={{ textAlign: "center" }}>
                <Loader
                  type="ThreeDots"
                  color="#101d2c"
                  height={50}
                  width={50}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
