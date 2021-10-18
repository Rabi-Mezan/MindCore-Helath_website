
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
// import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home></Home>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
