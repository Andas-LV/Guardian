import React, { useEffect } from 'react';
import styles from './components.module.css';
import { fetchNews } from '@/app/api/route';

interface BackProps {
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const Back: React.FC<BackProps> = ({ currentPage, onPageChange }) => {
    useEffect(() => {
        fetchNews(currentPage)
            .then()
            .catch((error) => {
                console.error(error);
            });
    }, [currentPage]);

    const handlePage = () => {
        onPageChange(currentPage - (currentPage-1));
    };

    return (
        <button onClick={handlePage} className={styles.backBtn}>
            Back
        </button>
    );
};

export default Back;
