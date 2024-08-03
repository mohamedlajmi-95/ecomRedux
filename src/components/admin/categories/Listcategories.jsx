import React, { useEffect } from "react";
import { getCategories, setLimit, setPage } from "../../../features/categorieSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesPagination } from "../../../features/categorieSlice";

import Pagination from "./Pagination";
import Affichecategories from "./Affichecategories";

const Listcategories = () => {
  const dispatch = useDispatch();
  const { page, limit, searchTerm } = useSelector(
    (state) => state.storecategories
  );

  const loadcategories = async () => {
    await dispatch(getCategoriesPagination());
  };

  useEffect(() => {
    loadcategories();
  }, [dispatch, page, limit, searchTerm]);

  const handleLimitChange = (event) => {
    dispatch(setLimit(parseInt(event.target.value, 10)));
    dispatch(setPage(1)); // Réinitialiser la page lorsque le nombre d'éléments par page change
  };
  return (
    <div>
      <Affichecategories />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div className="limit-selector-container">
          <label>
            Afficher &nbsp;
            <select
              value={limit}
              onChange={(event) => {
                handleLimitChange(event);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Listcategories;
