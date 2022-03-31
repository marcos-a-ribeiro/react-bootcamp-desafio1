import './styles.css';

import ProductImg from 'assets/images/car-card1.png';

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className='card-top-container'>
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className='card-bottom-container'>
        <h6>Audi Supra TT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
      </div>
      <button className="btn btn-by">
        <p>COMPRAR</p>
      </button>

    </div>
  );
};

export default ProductCard;