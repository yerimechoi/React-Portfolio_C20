import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Project(props) {
    return (
        <div className="projectCard">
            <img className="img-top" src={props.image} alt={props.title}/>
            <div>
                <h5 className="projectTitle">{props.title}</h5>
                <div>
                    <a href={props.repo} className="projectA">
                        <FontAwesomeIcon icon={brands ("github")} />
                    </a>
                    <a href={props.link} className="projectA">
                        <FontAwesomeIcon icon={solid ("link")} />
                    </a>
                </div>
                <p className="para">{props.description}</p>

            </div>
        </div>
    )
}

export default Project;