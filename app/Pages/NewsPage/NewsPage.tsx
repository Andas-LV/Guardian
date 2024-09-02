"use client";
import React, { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import LoadMore from "../../components/LoadMore";
import Back from "../../components/Back";
import Search from "../../components/Search";
import styles from "./news.module.css";
import { fetchNews } from "../../api/fetchNews";
import NewsDetail from "../NewsDetail/NewsDetail";

interface NewsItem {
  id: number;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

const NewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);
  const { news, status, error, totalPage } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage, dispatch]);

  if (status === "loading")
    return (
      <div className={styles.loader}>
        <div data-glitch="Loading..." className={styles.glitch}>
          Loading...
        </div>
      </div>
    );
  if (error) return <div>ERROR</div>;

  return (
    <div className={styles.container}>
      <Search news={news} />

      <div className={styles.newsContainer}>
        {news.map((newsItem: NewsItem) => (
          <NewsCard
            key={newsItem.id}
            title={newsItem.webTitle}
            section={newsItem.sectionName}
            onClick={() => setSelectedNews(newsItem)}
          />
        ))}
      </div>

      <div className={styles.btnGroup}>
        <Back />
        {currentPage}/{totalPage}
        <LoadMore />
      </div>

      <NewsDetail
        newsItem={selectedNews}
        onClose={() => setSelectedNews(null)}
      />
    </div>
  );
};

export default NewsPage;
