export default function Input({ handleChange, handleClear, isDisabled }) {
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
            <button
              className="cta cta--src"
              onClick={handleClear}
              disabled={isDisabled}
            >
              <i className="fas fa-times-circle fa-2x"></i>
            </button>
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
