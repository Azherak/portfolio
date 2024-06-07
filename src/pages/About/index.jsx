import React from "react";
import me from '../../assets/FD.webp'


function About(){
    return(
        <div className="about">
            <img src={me} alt="Florian"></img> 
            <div className="about-text">
                <h3>About</h3>
                <p>
                    Hi, i'm Florian DENIS, a french web developper, <br></br>
                    passionated by the newest technologies, <br></br>
                    like the blockchains and ai, <br></br>
                    and i hope i could contribute to help company and peoples.
                </p>
                <a href="">my resume</a>
            </div>
        </div>
    )
}

export default About;