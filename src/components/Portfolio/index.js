import React from "react";
import Project from '../Project';

function Portfolio() {
    const project = [
        {
            id: 0,
            name: 'Evie',
            repo: 'https://github.com/yerimechoi/eVie',
            link: 'https://yerimechoi.github.io/eVie/',
            description: 'This project was to use 2 server-side APIs to create a real-world front-end application. eVie is a web application to locate electric vehicle charging stations near the user and get more details on what the charging stations offers.'
        },
        {
            id: 1,
            name: 'Classic Whipz',
            repo: 'https://github.com/hovigmk/Classic_Whipz',
            link: 'https://classiccarswebsite.herokuapp.com/',
            description: 'Classic Whipz is a car e-commerce site that allows you to buy and sell classic cars. The site contains cars that are labeled vintage to newly classic ones. The process is once the buyer selects to buy, they pay 10% of the car value then it the connects the buyer to the seller. Both the buyer and the seller agree on a rendezvous.'
        },
    ]

    return (
        <main>
            <h1>Projects</h1>
            <div>
                <ul>
                    <li>
                        <Project project={project} />
                    </li>
                </ul>
            </div>
        </main>
    )
};

export default Portfolio;