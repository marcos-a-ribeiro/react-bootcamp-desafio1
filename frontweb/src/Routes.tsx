import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cars">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;