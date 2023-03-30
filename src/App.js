import logo from './logo.svg';
import './App.css';
import './style.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import ViewProductsDetails from './components/ViewProductsDetails';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/viewproductsdetails' element={<ViewProductsDetails />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
