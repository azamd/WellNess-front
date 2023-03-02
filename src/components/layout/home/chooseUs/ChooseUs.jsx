import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './chooseUs.css'


const ChooseUs = () => {

    const [picks] = useState([
        {
            id: 1,
            img: "assets/img/doc1.jpg",
            color: '38618e',
            text01: 'Your health, our mission',
            text02: 'Linking our clients with the finest doctors and experts in numurous fields to offer them quality services.',

        },
        {
            id: 2,
            img: "assets/img/knowledge.jpg",
            color: '#38618e',
            text01: 'Sharing knowledge',
            text02: 'A handful of diverse up-to-date articles and tips englobing everything that concerns your health and well-being.',

        },
        {
            id: 3,
            img: "assets/img/question.jpg",
            color: '#fff',
            text01: 'Your questions matter',
            text02: 'An open space for users to ask their questions, express their concerns on different health topics.',

        }
    ])

    return (
        <Carousel>
            {picks.map(data => (

                <Carousel.Item interval={3000} key={data.id} style={{ weight: "50%", height: "50%" }}>
                    <img className="d-block w-100" src={data.img} alt="First slide" />
                    <Carousel.Caption>

                        <h4 style={{ color: '#fff' }}>{data.text01}</h4>
                        <h3 style={{ color: '#fff' }}>{data.text02}</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}; export default ChooseUs


