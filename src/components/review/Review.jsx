import nat8 from "../../assets/img/nat-8.jpg"
import nat9 from "../../assets/img/nat-9.jpg"

function Review() {
    return (
        <section className="reviews">
            <div className="container flexContainer">
                <div className="videoBackground">
                    <video className="reviewsVideo" autoplay muted loop>
                        <source src="./assets/img/video.webm" type="video/webm"/>
                    </video>
                </div>
                <h2 className="title">WE MAKE PEOPLE GENUINELY HAPPY</h2>
                <div className="reviewCards">
                    {/* <!-- start --> */}
                    <div className="reviewCard">
                        <figure className="reviewCardImg">
                            <img src={nat8} alt="person"/>
                                <figcaption>MARY SMITH</figcaption>
                        </figure>
                        <div className="reviewCardInfo">
                            <h5>I HAD THE BEST WEEK EVER WITH MY FAMILY</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                                aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis
                                earum
                                qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus
                                quam
                                nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start --> */}
                    <div className="reviewCard">
                        <figure className="reviewCardImg">
                            <img src={nat9} alt="person"/>
                                <figcaption>JACK WILSON</figcaption>
                        </figure>
                        <div className="reviewCardInfo">
                            <h5>I HAD THE BEST WEEK EVER WITH MY FAMILY</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                                aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis
                                earum
                                qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus
                                quam
                                nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                </div>
            </div>
        </section>
    )
}

export default Review