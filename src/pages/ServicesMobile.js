import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import Duckyverb from "../assets/projects/Duckyverb.png"
import Djaminn from "../assets/projects/Djaminn.png"
import Xvox from "../assets/projects/Xvox.png"
import Sistema from "../assets/projects/Sistema.png"

const ServicesMobile = () => {
return (
<div className="services-container-mobile">
    <h1>Services</h1>
    <h3>"Beesting provided the critical technical expertise, cutting-edge development and were incredibly reliable and responsive partners throughout the entire project."</h3>
    <h3>The Nuro Audio Product Team</h3>
    <p>As well as producing our own software, we also provide services and systems for your software and end to end software development.
        <br/>
        <br/>
        We can create the audio software you need, custom to your requirements. We can create your DAW audio plugins, standalone software, DSP code for existing software, audio algorithms, iOS and Android audio applications and libraries, and much more.
        <br/>
        <br/>
        Check out our services and some of the projects we have been a part of below. If there is something you need to develop, let us know.
    </p>
    <Link to="/contact">Get in Touch</Link>
    <div className="title-row">
        <h3 className="title-object">Previous Projects</h3>
    </div>
    <div className="serviceBox-mobile">
        <img src={Xvox} alt="Xvox"/>
        <h3>Xvox</h3>
        <p>Working closely with the team at Nuro Audio, we created and built out DSP algorithms and the user interface according to tight specifications, to deliver a top of the range vocal effect plugin for mixing.</p> 
        <Link to="https://nuroaudio.com/">Learn More</Link>
    </div>
    <div className="serviceBox-mobile">
        <img src={Sistema} alt="Sistema"/>
        <h3>Sistema</h3>
        <p>Sistema by guk.ai is an AI-powered plugin instrument that helps users easily create pro-quality sounds for their music. We helped the team at Guk.ai to rebuild their wavetable synthesiser at the core of the instrument.</p>
        <Link to="https://www.guk.ai">Learn More</Link>
    </div>
    <div className="serviceBox-mobile">
        <img src={Duckyverb} alt="Duckyverb"/>
        <h3>Duckyverb</h3>
        <p>Duckyverb combines a high quality revberb plugin, a ducking compressor and a parametric EQ into one plugin, compressing an entire effect chain into one, easy to use process.</p>
        <Link to="https://www.parametricaudio.io">Learn More</Link>
    </div>
    <div className="serviceBox-mobile">
        <img src={Djaminn} alt="Djaminn"/>
        <h3>Djaminn</h3>
        <p>Djaminn is a mobile app for collaborating and sharing music. We worked on the low-latency multi-track recorder in the app, for integration into existing mobile app. </p>
        <Link to="https://www.djaminn.com">Learn More</Link>
    </div>
</div>
);
}

export default ServicesMobile;