import React from 'react';
import './Intro.css'


export default function Intro() {

    return ( 
        <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Calum Laverick</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src="img/dev-jane-01.jpg" alt="a picture of Calum Laverick smiling" className="intro__img"/>
    </section>
    )
}