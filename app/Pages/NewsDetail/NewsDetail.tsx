import React from 'react';
import styles from './detail.module.css';
import { formatDate } from '@/app/helpers/formatDate'

interface NewsDetailProps {
    newsItem: {
        id: number;
        sectionName: string;
        webPublicationDate: string;
        webTitle: string;
        webUrl : string;
    } | null;
    onClose: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ newsItem, onClose }) => {
    if (!newsItem) {
        return null;
    }

    return (
        <div className={styles.newsDetailModal}>
            <div className={styles.newsDetailBlock}>
                <h2 className={styles.webTitle}>{newsItem.webTitle}</h2>
                <div className={styles.Date}>Date: {formatDate(newsItem.webPublicationDate)}</div>
                <p className={styles.sectionDetailName}>Theme: {newsItem.sectionName}</p>
                <a href={newsItem.webUrl} target="_blank" className={styles.originLink}>
                    Read on Guardian
                </a>

                <button className={styles.closeButton} onClick={onClose}>
                    <span className={styles.X}></span>
                    <span className={styles.Y}></span>
                    <div className={styles.close}>Close</div>
                </button>
            </div>
        </div>
    );
};

export default NewsDetail;
