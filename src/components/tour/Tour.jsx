import React from 'react'
import nat1 from "../../assets/img/nat-1-large.jpg"
import nat2 from "../../assets/img/nat-2-large.jpg"
import nat3 from "../../assets/img/nat-3-large.jpg"
import "./tour.css"
function Tour() {
    return (
        <section class="tour">
            <div class="container flexContainer">
                <h2 class="title">EXCITING TOURS FOR ADVENTUROUS PEOPLE</h2>
                <div class="tourDesc">
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
                    <a href="/" class="secondryButton">Learn more<box-icon name='right-arrow-alt' color='#55c57a' ></box-icon></a>
                </div>
                <div class="tourImages">
                    <figure class="tourImg">
                        <img src={nat1} alt="nature" />
                    </figure>
                    <figure class="tourImg centerImg">
                        <img src={nat2} alt="nature" />
                    </figure>
                    <figure class="tourImg">
                        <img src={nat3} alt="nature" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Tour