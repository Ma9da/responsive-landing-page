import React from 'react'
import nat1 from "../../assets/img/nat-1-large.jpg"
import nat2 from "../../assets/img/nat-2-large.jpg"
import nat3 from "../../assets/img/nat-3-large.jpg"
import "./tour.css"
function Tour(props) {
    const { title } = props.tour
    return (
        <section className="tour">
            <div className="container flexContainer">
                <h2 className="title">{title}</h2>
                <div className="tourDesc">
                    <h4>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                    <h4>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt
                        voluptatum
                        nam.
                    </p>
                    <a href="/" className="secondryButton">Learn more <box-icon name='right-arrow-alt' ></box-icon> </a>
                </div>
                <div className="tourImages">
                    <figure className="tourImg">
                        <img src={nat1} alt="nature" />
                    </figure>
                    <figure className="tourImg centerImg">
                        <img src={nat2} alt="nature" />
                    </figure>
                    <figure className="tourImg">
                        <img src={nat3} alt="nature" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Tour