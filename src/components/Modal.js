import React from "react";

import "../styles/Modal.css"

const Modal = ({title, associateWord, content, picture, more }) => {
    return(
        <div className="modal-overlay">
            <div className="modal">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Modal