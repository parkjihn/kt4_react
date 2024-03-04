import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import Stars from "../../Stars/Stars";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchShop = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchShop();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.productBox}>
      <div className={style.productTitle}>{product.title}</div>
      <div className={style.productImg}>
        <img src={product.image} alt=""></img>
      </div>
      <div className={style.productPrice}>Price: {product.price} $</div>
      <div className={style.productDesc}>
        Description: {product.description}
      </div>

      <div>
        <Stars rating={Math.round(product.rating.rate)} />
      </div>

      <div className={style.backButtonContainer}>
        <Link to="/products" className={style.backButton}>
          Назад к списку товаров
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
