import React, {useState} from 'react';
import styles from './components.module.css'
interface SearchComponent {
    news: any[];
}

const Search:React.FC<SearchComponent> = ({ news }) => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = () => {
        const filteredResults = news.filter((newsItem) =>
            newsItem.webTitle.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div className={styles.searchWrapper}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your search"
                className={styles.searchInput}
            />
            <button onClick={handleSearch} className={styles.searchBtn}>Search</button>

            <div className={styles.searchedContainer}>
                {results.map((result) => (
                    <div className={styles.searchedBlock}>
                        <h2>{result.webTitle}</h2>
                        <div className={styles.sectionName}>{result.sectionName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
