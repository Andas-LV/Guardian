import React from "react";
import styles from "./page.module.css";
import NewsPage from "@/app/Pages/NewsPage/NewsPage";

function Home() {
    return (
        <main className={styles.main}>
            <NewsPage/>
        </main>
    );
}
export default Home;