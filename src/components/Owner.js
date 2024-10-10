import React from 'react';
import '../styles/Owner.css'; // Import du fichier CSS pour le style

function Owner() {
    return (
        <div className="ownerContainer">
            <div className="ownerTitle">
                <p>Owner</p>
                <i className="bi bi-info-circle-fill bsOwnerIcons"></i>
            </div>
            <div className="ownerDetails">
                <div className="ownerIcons">
                    <img src="/assets/Rachel.svg" alt="Rachel"/>
                    <p>Rachel</p>
                </div>
                <div className="ownerBtn">
                    <img src="/assets/Next.svg" alt="Next" className="ownerNext"/>
                </div>
            </div>
        </div>
    );
}
export default Owner;
