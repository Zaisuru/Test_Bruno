import React from 'react';
import '../styles/Status.css'; // Import du fichier CSS pour le style

/* import images  */

import Progress from '../assets/Progress.svg';
import Next from '../assets/Next.svg';

function Status() {
    return (
        <div className="statusContainer">
            <div className="statusTitle">
                <div className="statusTitleIcons">
                    <i className="bi bi-speedometer2"></i>
                    <p>Status</p>
                </div>
                    <i className="bi bi-info-circle-fill bsStatusIcons"></i>
            </div>
            <div className="statusDetails">
                <div className="statusIcons">
                    <img src={Progress} alt="Progress"/>
                    <p>In progress</p>
                </div>
                <div className="statusBtn">
                    <img src={Next} alt="Next" className="statusNext"/>
                </div>
            </div>
        </div>
    );
}

export default Status;
