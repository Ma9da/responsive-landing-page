import React from 'react'
import "./hero.css"
function Hero(props) {
    const { title } = props.hero
    return (
        <section className="hero">
            <div className="container flexContainer">
                <h2>{title}</h2>
                <p>
                    IS WHERE LIFE HAPPENS
                </p>
                <button className="primaryButton">
                    discover our tours
                </button>
            </div>
        </section>
    )
}

export default Hero