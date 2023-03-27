import React, {useState} from 'react';

function Project(props) {
    const currentProject = useState(0);
    const { id, name, repo, link, description } = currentProject;

    const overallStyle = { padding: '10px' };

    return (
        <div className="headerAbout" key={id}>
            <img
                src={`../../../Assets/${name}.jpg`}
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