export default function Input({ handleChange, handleClear }) {
  return (
    <>
      <div className="input-container">
        <form className="d-flex">
          <div className="header__search-box">
            <input
              type="text"
              className="header__search"
              placeholder="search books"
              onChange={handleChange}
            />
            <a className="cta cta--src" onClick={handleClear}>
              <i className="fas fa-times-circle fa-2x"></i>
            </a>
          </div>
        </form>
      </div>
      <style jsx>{`
        .input-container {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
