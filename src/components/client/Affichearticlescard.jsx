import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../style.css";
import { addToCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";
const Affichearticlescard = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleAddToCart = (art) => {
    dispatch(addToCart(art));
    navigate("/");
  };

  const { articles, isLoading, error } = useSelector(
    (state) => state.storearticles
  );

  return (
    <div className="card-container">
      {isLoading ? (
        <div className="loading-message">Chargementencours...</div>
      ) : error ? (
        <div className="error-message">Erreur : {error}</div>
      ) : (
        <>
          {articles.map((article, index) => (
            <div className="card" key={index}>
              <img src={article.imageart} alt={article.reference} />
              <div className="card-content">
                <h1 className="card-title">{article.reference}</h1>
                <p className="card-description">
                  {article.designation.substr(0, 20)}
                </p>
                <h1 className="card-title">Prix : {article.prix} TND</h1>
                <button
                  className="card-button"
                  disabled={article.qtestock <= 1}
                  onClick={() => handleAddToCart(article)}
                >
                  <i className="fa-solid fa-cart-shopping"></i>Add to card
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Affichearticlescard;
