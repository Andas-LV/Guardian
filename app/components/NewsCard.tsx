import React, { useEffect, useState } from "react";
import styles from "./components.module.css";


interface NewsItem {
  key: number;
  section: string;
  title: string;
  onClick: () => void;
}

const NewsCard: React.FC<NewsItem> = ({ title, section, onClick }) => {
  return (
    <div className={styles.block} onClick={onClick}>
      <h2>{title}</h2>
      <div className={styles.sectionName}>{section}</div>
    </div>
  );
};

export default NewsCard;
