import React, { useEffect } from "react";
import styles from "./components.module.css";
import { nextPage } from "../store/pageSlice";
import { useDispatch, useSelector } from 'react-redux';

const LoadMore = () => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  return (
    <button onClick={handleNextPage} className={styles.loadMoreBtn}>
      More
    </button>
  );
};

export default LoadMore;
