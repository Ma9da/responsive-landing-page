import React from 'react'
import "./features.css"
function Features() {
    return (
        <section class="features">
            <div class="container flexContainer">
                <div class="featuresWrapper">
                    {/* <!-- strat --> */}
                    <div class="featureCard">
                        <span class="featureIcon"> <box-icon name='globe' color='#777777' ></box-icon> </span>
                        <h4 class="featureTitle">EXPLORE THE WORLD</h4>
                        <p class="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start  --> */}
                    <div class="featureCard">
                        <span class="featureIcon"> <box-icon name='compass' color='#777777' ></box-icon> </span>
                        <h4 class="featureTitle">MEET NATURE</h4>
                        <p class="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start  --> */}
                    <div class="featureCard">
                        <span class="featureIcon"><box-icon name='map-alt' color='#777777' ></box-icon></span>
                        <h4 class="featureTitle">FIND YOUR WAY</h4>
                        <p class="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            ipsum
                            sapiente aspernatur.</p>
                    </div>
                    {/* <!-- end --> */}
                    {/* <!-- start  --> */}
                    <div class="featureCard">
                        <span class="featureIcon"> <box-icon name='heart' color='#777777' ></box-icon> </span>
                        <h4 class="featureTitle">LIVE A HEALTHIER LIFE</h4>
                        <p class="featureInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
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