import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const useFetchSingleDoctor = () => {
    const [expert, setExpert] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {


                const { data: response } = await axios.get(`http://localhost:8089/Wellness/users/retrieve-single-user/${id}`, {

                    method: 'GET',
                    headers: {

                        'Accept': 'application/json'
                    }
                })

                setExpert(response);
            } catch (error) {
                console.error(error)
            }

        };

        fetchData();
    });

    return {
        expert,

    };
};

export default useFetchSingleDoctor;