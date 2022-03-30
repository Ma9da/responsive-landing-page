import React from 'react'
import "./popular.css"
function Popular() {
    return (
        <section className="popular">
            <div className="container flexContainer">
                <h2 className="title">most popular tour</h2>
                <div className="popularWrapper">
                    {/* <!-- start  --> */}
                    <div className="popularCard popularCardYellow">
                        <div className="cardFront">
                            <header className="popularHeader popularHeaderYellow">
                                <span>the sea explorer</span>
                            </header>
                            <ul>
                                <li>3 day tours</li>
                                <li>up to 3 people</li>
                                <li>2 tour guides</li>
                                <li>sleep in cozy hotels</li>
                                <li>Difficulty: easy</li>
                            </ul>
                        </div>
                        <div className="cardBack">
                            <div className="popularFooter">
                                <span>only</span>
                                <h4>$297</h4>
                                <a href="/" className="primaryButton">Book now!</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end  --> */}
                    {/* <!-- start  --> */}
                    <div className="popularCard popularCardGreen">
                        <div className="cardFront">
                            <header className="popularHeader popularHeaderGreen">
                                <span>the forest hiker</span>
                            </header>
                            <ul>
                                <li>7 day tours</li>
                                <li>up to 40 people</li>
                                <li>6 tour guides</li>
                                <li>sleep in provided tents</li>
                                <li>Difficulty: medium</li>
                            </ul>
                        </div>
                        <div className="cardBack">
                            <div className="popularFooter">
                                <span>only</span>
                                <h4>$297</h4>
                                <a href="*" className="primaryButton">Book now!</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end  --> */}
                    {/* <!-- start  --> */}
                    <div className="popularCard popularCardBlue">
                        <div className="cardFront">
                            <header className="popularHeader popularHeaderBlue">
                                <span>the snow adventure</span>
                            </header>
                            <ul>
                                <li>5 day tours</li>
                                <li>up to 15 people</li>
                                <li>3 tour guides</li>
                                <li>sleep in provided tents</li>
                                <li>Difficulty: hard</li>
                            </ul>
                        </div>
                        <div className="cardBack">
                            <div className="popularFooter">
                                <span>only</span>
                                <h4>$297</h4>
                                <a href="*" className="primaryButton">Book now!</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end  --> */}
                </div>
                <a href="/" className="primaryButton">discover all tours</a>
            </div>
        </section>
    )
}

export default Popular