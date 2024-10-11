import React from 'react';
import '../styles/Owner.css'; // Import du fichier CSS pour le style

/*import image*/
import Rachel from '../assets/Rachel.svg'
import Next from '../assets/Next.svg'


function Owner() {
    return (
        <div className="ownerContainer">
            <div className="ownerTitle">
                <p>Owner</p>
                <i className="bi bi-info-circle-fill bsOwnerIcons"></i>
            </div>
            <div className="ownerDetails">
                <div className="ownerIcons">
                    <img src={Rachel} alt="Rachel"/>
                    <p>Rachel</p>
                </div>
                <div className="ownerBtn">
                    <img src={Next} alt="Next" className="ownerNext"/>
                </div>
            </div>
        </div>
    );
}
export default Owner;
