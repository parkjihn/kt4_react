
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stars from '../../Stars/Stars';
import style from './ProductList.module.css'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const data = await response.json();
      setProducts(data);
    };
    fetchShop();
  }, []);

  return (
    <div className={style.productList}>
      {products.map(product => (
        <div className={style.productID} key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
          
          <div>
            <Stars rating={Math.round(product.rating.rate)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;