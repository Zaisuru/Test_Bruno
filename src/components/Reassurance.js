import React,{useEffect, useRef} from "react";
import "../styles/Reassurance.css";

/* import logos */
import Doctolib from '../assets/Doctolib.svg';
import Slack from '../assets/Slack.svg';
import PayFit from '../assets/PayFit.svg';
import Natixis from '../assets/Natixis.svg';
import SpenDesk from '../assets/SpenDesk.svg';
function Reassurance (){

    const logos = [
        {id:1, src:Doctolib, alt:"Doctolib"},
        {id:4, src:Slack, alt:"Slack"},
        {id:3, src:PayFit, alt:"PayFit"},
        {id:2, src:Natixis, alt:"Natixis"},
        {id:5, src:SpenDesk, alt:"SpenDesk"}
    ]

    return(
        <div className="reassurance">
            <div className="carouselLogoContainer">
                {logos.map((logo) =>(
                    <div className="carouselLogoItems" key={logo.id}>
                        <img src={logo.src} alt={logo.alt}/>
                    </div>
                ))}
                {logos.map((logo) =>(
                    <div className="carouselLogoItems" key={`${logo.id}-duplicate`}>
                        <img src={logo.src} alt={logo.alt}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Reassurance
