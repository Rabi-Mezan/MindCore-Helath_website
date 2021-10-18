
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
