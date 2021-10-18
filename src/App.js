
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
// import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/details/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route to='/services'>
            <Services></Services>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
