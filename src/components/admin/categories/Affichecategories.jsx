import React from "react";
import { useSelector } from "react-redux";

const Affichecategories = () => {
  const { categories, isLoading, error } = useSelector(
    (state) => state.storecategories
  );

    return (
      <div className="table-container">
        {isLoading ? (
          <div className="loading-message">Chargement en cours...</div>
        ) : error ? (
          <div className="error-message">Erreur : {error}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name Category</th>
                <th>Modifier</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((categ, index) => (
                <tr key={index}>
                  <td>
                    <img src={categ.imagecategorie} width={80} height={80} />
                  </td>
                  <td>{categ.nomcategorie}</td>
                  <td>
                    <button className="edit">
                      <i className="fa-solid fa-pen-to-square"></i>Update
                    </button>
                  </td>
                  <td>
                    <button className="delete">
                      <i class="fa-solid fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        )}
      </div>
    );
  };


export default Affichecategories;
