import React, { useEffect } from "react";
import styles from "./components.module.css";
import { prevPage } from "../store/pageSlice";
import { useDispatch } from "react-redux";

const Back = () => {
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  return (
    <button onClick={handlePrevPage} className={styles.backBtn}>
      Back
    </button>
  );
};

export default Back;
