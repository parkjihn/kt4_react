
import style from './App.css'
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className={style.app}>
      
         <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;