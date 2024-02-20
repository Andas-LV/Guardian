"use client"
import React, { useState, useEffect } from 'react';
import NewsCard from '../../components/NewsCard';
import { fetchNews } from '../../api/route';
import LoadMore from "../../components/LoadMore";
import Back from "../../components/Back";
import Search from "../../components/Search";
import styles from './news.module.css';
import NewsDetail from "../NewsDetail/NewsDetail";

const NewsPage: React.FC = () => {
    interface NewsItem {
        sectionName: string;
        webPublicationDate: number;
        webTitle: string;
        webUrl: string;
        id: number;
    }

    const [news, setNews] = useState<NewsItem[]>([]);
    const [page, setPage] = useState(1);
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState(false);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    }

    useEffect(() => {
        setLoading(true);
        fetchNews(page)
            .then((data) => {
                if (page === 1) {
                    setNews(data);
                } else {
                    setNews(prev => [...prev, ...data]);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    return (
        <div className={styles.container}>
            <Search news={news}/>

            <div className={styles.newsContainer}>
                {news.map((newsItem) => (
                    <NewsCard
                        key={newsItem.id}
                        title={newsItem.webTitle}
                        section={newsItem.sectionName}
                        onClick={() => setSelectedNews(newsItem)}
                    />
                ))}
            </div>

            {loading && <div className={styles.loader}>
                <div data-glitch='Loading...' className={styles.glitch}>Loading...</div>
            </div>}

            <div className={styles.btnGroup}>
                <LoadMore currentPage={page} onPageChange={handlePageChange}/>
                <Back currentPage={page} onPageChange={handlePageChange}/>
            </div>

            <NewsDetail newsItem={selectedNews} onClose={() => setSelectedNews(null)} />
        </div>
    );
}

export default NewsPage;
