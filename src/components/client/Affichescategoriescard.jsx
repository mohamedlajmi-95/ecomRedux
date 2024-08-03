import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../style.css";
const Affichescategoriescard = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.storescategories
  );

  return (
    <div className="card-container">
      {isLoading ? (
        <div className="loading-message">Chargementencours...</div>
      ) : error ? (
        <div className="error-message">Erreur : {error}</div>
      ) : (
        <>
          {categories.map((scategorie, index) => (
            <div className="card" key={index}>
              <img
                src={scategorie.imagescategorie}
                alt={scategorie.nomscategorie}
              />
              <div className="card-content">
                <h1 className="card-title">{scategorie.nomscategorie}</h1>{" "}
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
export default Affichescategoriescard;
