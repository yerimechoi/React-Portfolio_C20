import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    return (
        <footer>
            <div className="footerStyle">
                <div>
                    <a href='https://github.com/yerimechoi'>
                        <FontAwesomeIcon icon={brands ("github")} />
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/ye-rim-esther-choi/'>
                        <FontAwesomeIcon icon={brands ("linkedin")} />
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;