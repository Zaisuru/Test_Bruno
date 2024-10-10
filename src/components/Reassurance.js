import React,{useEffect, useRef} from "react";
import "../styles/Reassurance.css";


function Reassurance (){

    const logos = [
        {id:1, src:'/assets/Doctolib.svg', alt:"Doctolib"},
        {id:4, src:'/assets/Slack.svg', alt:"Slack"},
        {id:3, src:'/assets/PayFit.svg', alt:"PayFit"},
        {id:2, src:'/assets/Natixis.svg', alt:"Natixis"},
        {id:5, src:'/assets/SpenDesk.svg', alt:"SpenDesk"}
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
