import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [experts, setExperts] = useState([]);


    useEffect(() => {
        const fetchData = async() => {
            try {
                const { data: response } = await axios.get('http://localhost:8089/Wellness/users/full_list', {

                    method: 'GET',
                    headers: {

                        'Accept': 'application/json'
                    }
                })

                setExperts(response);
            } catch (error) {
                console.error(error)
            }

        };

        fetchData();
    }, []);

    return {
        experts,

    };
};

export default useFetchData;