"use client";
import React from "react";
import styles from "./page.module.css";
import NewsPage from "@/app/Pages/NewsPage/NewsPage";
import { Provider } from "react-redux";
import {store} from "./store";

function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <NewsPage />
      </main>
    </Provider>
  );
}
export default Home;
