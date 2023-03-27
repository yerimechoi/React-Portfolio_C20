import React from "react";
import Project from '../Project/index.js';
import pic1 from "../../Assets/evie.jpg";
import pic2 from "../../Assets/classicwhipz.jpg";
import pic3 from "../../Assets/untitled.jpg";

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
        name: 'TBD',
        repo: 'https://google.com/',
        link: 'https://google.com/',
        image: pic3,
        description: 'TBD'
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
                    />
                </div>
            ))}
        </main>
    )
};

export default Work;