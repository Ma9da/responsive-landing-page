import React from 'react'
import "./features.css"
function Features() {
    return (
        <section className="features">
            <div className="container flexContainer">
                <div className="featuresWrapper">
                    {/* <!-- strat --> */}
                    <div className="featureCard">
                        <span className="featureIcon">  </span>
                        <h4 className="featureTitle">EXPLORE THE WORLD</h4>
                        <p className="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start  --> */}
                    <div className="featureCard">
                        <span className="featureIcon"> </span>
                        <h4 className="featureTitle">MEET NATURE</h4>
                        <p className="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start  --> */}
                    <div className="featureCard">
                        <span className="featureIcon"> </span>
                        <h4 className="featureTitle">FIND YOUR WAY</h4>
                        <p className="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start  --> */}
                    <div className="featureCard">
                        <span className="featureIcon"> </span>
                        <h4 className="featureTitle">LIVE A HEALTHIER LIFE</h4>
                        <p className="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                </div>
            </div>
        </section>
    )
}

export default Features