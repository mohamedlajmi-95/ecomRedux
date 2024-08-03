import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../style.css";
const Affichecategoriescard = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.storecategories
  );

  return (
    <div className="card-container">
      {isLoading ? (
        <div className="loading-message">Chargementencours...</div>
      ) : error ? (
        <div className="error-message">Erreur : {error}</div>
      ) : (
        <>
          {categories.map((categorie, index) => (
            <div className="card" key={index}>
              <img
                src={categorie.imagecategorie}
                alt={categorie.nomcategorie}
              />
              <div className="card-content">
                <h1 className="card-title">{categorie.nomcategorie}</h1>
                <button className="card-button">
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
export default Affichecategoriescard;
