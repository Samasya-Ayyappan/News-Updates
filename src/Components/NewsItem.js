import React from 'react';

const NewsItem = ({ article }) => {
    return (
        <div className="news-item">
            {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="news-item-image" />}
            <h2>{article.title}</h2>
            {/* Ensure description is displayed if available */}
            {article.description && <p>{article.description}</p>}
            {article.content && <div className="news-item-content">{article.content}</div>}
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
};

export default NewsItem;
