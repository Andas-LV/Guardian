import React, { useEffect } from "react";
import styles from "./components.module.css";
import { nextPage } from "../store/pageSlice";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

interface LoadMoreProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const LoadMore: React.FC<LoadMoreProps> = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);

  const handleNextPage = () => {
    dispatch(nextPage());
    console.log("currentPage", currentPage);
  };

  return (
    <button onClick={handleNextPage} className={styles.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMore;
