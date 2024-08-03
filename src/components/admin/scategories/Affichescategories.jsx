import React from "react";
import { useSelector } from "react-redux";

const Affichescategories = () => {
  const { scategories, isLoading, error } = useSelector(
    (state) => state.storescategories
  );

  const Affichescategories = () => {
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
                <th>Name SCategory</th>
              </tr>
            </thead>
            <tbody>
              {scategories.map((scateg, index) => (
                <tr key={index}>
                  <td>
                    <img src={scateg.imagescategorie} width={80} height={80} />
                  </td>
                  <td>{scateg.nomscategorie}</td>

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
};

export default Affichescategories;
