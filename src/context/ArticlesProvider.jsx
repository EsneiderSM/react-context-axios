import { createContext, useEffect, useState } from "react";

const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {

    const [category, setCategory] = useState('');
    const [articles, setArticles] = useState([]);

    const handlerChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        const getArticles = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=c105012511a84a1897f5b95b3840de26`;
            const response = await fetch(url);
            const news = await response.json();
            setArticles(news.articles);
            console.log(news.articles);
        }
        getArticles();
    }, [category]);

    return (
        <ArticlesContext.Provider
            value = {{ category, articles, handlerChangeCategory }}
        >
            {children}
        </ArticlesContext.Provider>
    )
}

export { ArticlesProvider };
export default ArticlesContext;