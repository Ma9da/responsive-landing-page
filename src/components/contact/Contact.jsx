import React from 'react'
import "./contact.css"
function Contact() {
    return (
        <section className="contact">
            <div className="container flexContainer">
                <div className="contactForm">
                    <h5 className="title">start booking now</h5>
                    <form action="">
                        <label for="fullName"></label>
                        <input type="text" name="fullName" id="fullName" placeholder="Full name" />
                        <label for="emailAddress"></label>
                        <input type="email" name="emailAddress" id="emailAddress" placeholder="Email addess" />
                        <div className="radioButtons">
                            <div className="radioGroup">
                                <input type="radio" name="group" id="small" value="Small tour group" />
                                <label for="small">Small tour group</label>
                            </div>
                            <div className="radioGroup">
                                <input type="radio" name="group" id="large" value="large tour group" />
                                <label for="large">large tour group</label>
                            </div>
                        </div>
                        <button type="submit" className="primaryButton">next step <i
                            className='bx bx-right-arrow-alt'></i></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact