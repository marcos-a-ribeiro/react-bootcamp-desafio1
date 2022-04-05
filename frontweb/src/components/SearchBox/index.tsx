import './styles.css';

const SearchBox = () => {
  return (
    <div className='row search-container'>
      <div className="search-box col-sm-6 col-lg-4">
        <input type="text" className="search-text" placeholder='Digite sua busca'
          aria-describedby="basic-addon3"
        />
        <button className="btn search-button">
          <p>BUSCAR</p>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
