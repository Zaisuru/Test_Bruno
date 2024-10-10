import "../styles/Consultants.css"

/* Import icons fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function Consultants(){
    return (
        <div className="consultants">
            <div className="consultantsTitle">
                <h2>A solution for everyone</h2>
            </div>
            <div className="consultantsButtonNav">
                <button className="navBtn prevBtn">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_311_1702)">
                            <path d="M4.1999 9.99927H15.3999" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M8.20081 13.9995L4.20081 9.99951" stroke="#F4F8EF" stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.20081 5.99951L4.20081 9.99951" stroke="#F4F8EF" stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_311_1702">
                                <rect width="19.2" height="19.2" fill="white"
                                      transform="matrix(-1 0 0 1 19.4 0.399902)"/>
                            </clipPath>
                        </defs>
                    </svg>

                </button>
                <button className="navBtn nextBtn">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_311_1709)">
                            <path d="M15.9982 9.99927H4.79822" stroke="#F4F8EF" stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9989 13.9993L15.9989 9.99927" stroke="#F4F8EF" stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9989 5.99951L15.9989 9.99951" stroke="#F4F8EF" stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_311_1709">
                                <rect width="19.2" height="19.2" fill="white" transform="translate(0.799927 0.399902)"/>
                            </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>

            <div className="carousel">
                <div className="carouselContainer">
                    <h1>salut</h1>
                </div>
                <div className="carouselContainer">
                    <h1>salut</h1>
                </div>
            </div>
        </div>
    )
}

export default Consultants