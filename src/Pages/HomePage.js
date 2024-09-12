import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import NewsList from '../Components/NewsList';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://gnews.io/api/v4/top-headlines?token=a2f53516f437e5fb4eeb93b54192420e');
                setArticles(response.data.articles);
                setFilteredArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error.response ? error.response.data : error.message);
                setError('Error fetching news.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleSearch = (query) => {
        if (query) {
            const results = articles.filter(article =>
                article.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredArticles(results);
        } else {
            setFilteredArticles(articles);
        }
    };

    return (
        <div className="homepage">
            <Header />
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <NewsList articles={filteredArticles} />}
        </div>
    );
};

export default HomePage;
