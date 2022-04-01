import React from 'react'
import "./footer.css"
import logo from "../../assets/img/logo-green-2x.png"
function Footer() {
    return (
        <footer>
            <div className="container flexContainer">
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <div className="footerInfo">
                    <ul className="footerLinks">
                        <li><a href="/">company</a></li>
                        <li><a href="/">contact us</a></li>
                        <li><a href="/">careers</a></li>
                        <li><a href="/">privacy policy</a></li>
                        <li><a href="/">terms</a></li>
                    </ul>
                    <p className="footerCopyWrite">
                        Built by JONAS SCHMEDTMANN for his online course ADVANCED CSS AND SASS. Copyright © by Jonas
                        Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT
                        to
                        claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly
                        appreciated!
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer