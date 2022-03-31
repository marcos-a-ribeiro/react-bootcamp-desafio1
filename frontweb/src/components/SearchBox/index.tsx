import './styles.css';

const SearchBox = () => {
  return (
    <>
      <div className="search-box">
        <input type="text" className="search-text"
          aria-describedby="basic-addon3"
        />
        <button className="btn btn-icon search-button">
          <p>BUSCAR</p>
        </button>
      </div>
    </>
  );
};

export default SearchBox;
