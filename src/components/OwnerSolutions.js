import React from 'react';
import '../styles/OwnerSolutions.css'; // Import du fichier CSS pour le style


/* import Image */
import Rachel from '../assets/Rachel.svg';
import Next from '../assets/Next.svg';
function OwnerSolution() {
    return (
        <div className="ownerSolutionsContainer">
            <div className="ownerSolutionsTitle">
                <div className="solutionsTitleIcons">
                    <i className="bi bi-person-circle"></i>
                    <p>Owner</p>
                </div>
                <i className="bi bi-info-circle-fill solutionsOwnerIcons"></i>
            </div>
            <div className="ownerSolutionsDetails">
                <div className="ownerSolutionsIcons">
                    <img src={Rachel} alt="Rachel"/>
                    <p>Rachel</p>
                </div>
                <div className="ownerSolutionsBtn">
                    <img src={Next} alt="Next" className="ownerSolutionsNext"/>
                </div>
            </div>
        </div>
    );
}
export default OwnerSolution;
