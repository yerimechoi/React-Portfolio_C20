import React,{useState} from 'react';

function Project(props) {
    const currentProject = useState(props).project[0];
    const { name, repo, link, description } = currentProject;

    const overallStyle = { padding: '10px' };

    return (
        <div style={overallStyle} key={name}>
            <img
                src={require(`../../../Assets/${name}.jpg`).default}
                alt={name}
            />
            <div>
                <h3>
                    {name}
                </h3>
                <div>
                    <a href={repo}>
                    </a>
                    <a href={link}>
                    </a>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;