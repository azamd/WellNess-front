import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchArticleData = () => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const fetchData = async() => {
            try {
                const { data: response } = await axios.get('http://localhost:8089/Wellness/articles/retrieve-all-articles', {

                    method: 'GET',
                    headers: {

                        'Accept': 'application/json'
                    }
                })

                setArticles(response);
            } catch (error) {
                console.error(error)
            }

        };

        fetchData();
    }, []);

    return {
        articles,

    };
};

export default useFetchArticleData;