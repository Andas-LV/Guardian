import React, { useEffect } from 'react';
import styles from './components.module.css';
import { fetchNews } from '@/app/api/route';

interface LoadMoreProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ currentPage, onPageChange }) => {
    useEffect(() => {
        fetchNews(currentPage)
            .then()
            .catch((error) => {
                console.error(error);
            });
    }, [currentPage]);

    const handlePage = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <button onClick={handlePage} className={styles.loadMoreBtn}>
            Load More
        </button>
    );
};

export default LoadMore;
