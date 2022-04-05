import { ReactComponent as MainImage } from 'assets/images/car-header1.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="btn-panel">
        <Link to="/cars">
          <ButtonIcon />
        </Link>
        <div>Comece agora a navegar</div>
      </div>
    </div>
  );
};

export default Home;
