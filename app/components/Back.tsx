import React, { useEffect } from "react";
import styles from "./components.module.css";
import { nextPage, prevPage } from "../store/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

type BackProps = {
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const Back: React.FC<BackProps> = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);

  const handlePrevPage = () => {
    dispatch(prevPage());
    console.log("currentPage", currentPage);
  };

  return (
    <button onClick={handlePrevPage} className={styles.backBtn}>
      Back
    </button>
  );
};

export default Back;
