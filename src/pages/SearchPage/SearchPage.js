import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearch,
  getAllSearch,
  getSearchStatus,
} from "../../rtk/slices/searchSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import "./Searchpage.css";

function SearchPage() {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const search = useSelector(getAllSearch);
  const searchStatus = useSelector(getSearchStatus);

  useEffect(() => {
    dispatch(fetchSearch(searchTerm));
  }, [dispatch, searchTerm]);

  if (search && search.length === 0) {
    return (
      <div className="no-prodcuts">
        <div className="container">
          <div className="fw-5 text-danger py-5">
            <h3>No Products found.</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search results:</h3>
            </div>
            <br />
            {searchStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={search} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
