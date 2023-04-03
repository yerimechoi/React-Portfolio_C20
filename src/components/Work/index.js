import React from "react";
import Project from '../Project/index.js';
import pic1 from "../../Assets/evie.jpg";
import pic2 from "../../Assets/classicwhipz.jpg";
import pic3 from "../../Assets/JACE.png";

const cardProject = [
    {
        id: 1,
        name: 'eVie',
        repo: 'https://github.com/yerimechoi/eVie/',
        link: 'https://yerimechoi.github.io/eVie/',
        image: pic1,
        description: 'This project was to use 2 server-side APIs to create a real-world front-end application. eVie is a web application to locate electric vehicle charging stations near the user and get more details on what the charging stations offers.'
    },
    {
        id: 2,
        name: 'Classic Whipz',
        repo: 'https://github.com/hovigmk/Classic_Whipz/',
        link: 'https://classiccarswebsite.herokuapp.com/',
        image: pic2,
        description: 'Classic Whipz is a car e-commerce site that allows you to buy and sell classic cars. The site contains cars that are labeled vintage to newly classic ones. The process is once the buyer selects to buy, they pay 10% of the car value then it the connects the buyer to the seller. Both the buyer and the seller agree on a rendezvous.'
    },
    {
        id: 3,
        name: 'JACE',
        repo: 'https://github.com/cdennis27/JACE',
        link: 'https://jace1971.herokuapp.com/tables/1',
        image: pic3,
        description: "JACE, also known as Javascript And Croissant Express, is a powerful full-stack web application that provides restaurants with a complete solution for managing in-house orders, customer authentication, order history, and payment processing. With JACE, restaurant owners can easily utilize a front-end interface for their customers to place orders, as well as track the status of orders in the kitchen, pulling information from data stored in the server. Whether you're a small cafe or a large restaurant chain, JACE can help you streamline your operations and provide your customers with a streamlined ordering experience."
    },
]

function Work() {
    return (
        <main className="work">
            <h2 className="headerWork">Recent Works</h2>
            {cardProject.map((card) => (
                <div key={card.id}>
                    <Project
                        image={card.image}
                        title={card.name}
                        description={card.description}
                        repo={card.repo}
                        link={card.link}
                    />
                </div>
            ))}
        </main>
    )
};

export default Work;