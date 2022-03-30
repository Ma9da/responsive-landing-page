import React from 'react'
import "./contact.css"
function Contact() {
    return (
        <section class="contact">
            <div class="container flexContainer">
                <div class="contactForm">
                    <h5 class="title">start booking now</h5>
                    <form action="">
                        <label for="fullName"></label>
                        <input type="text" name="fullName" id="fullName" placeholder="Full name" />
                        <label for="emailAddress"></label>
                        <input type="email" name="emailAddress" id="emailAddress" placeholder="Email addess" />
                        <div class="radioButtons">
                            <div class="radioGroup">
                                <input type="radio" name="group" id="small" value="Small tour group" />
                                <label for="small">Small tour group</label>
                            </div>
                            <div class="radioGroup">
                                <input type="radio" name="group" id="large" value="large tour group" />
                                <label for="large">large tour group</label>
                            </div>
                        </div>
                        <button type="submit" class="primaryButton">next step <i
                            class='bx bx-right-arrow-alt'></i></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact