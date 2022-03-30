import  logoWhite  from "../../assets/img/logo-white.png";
import "./Navbar.css"
function Navbar() {
    return (
        <header class="nav">
            <section class="container flexContainer">
                <figure class="navLogo">
                    <img src={logoWhite} alt="logo" />
                </figure>
                <label for="active" class="toggleButton" id="openToggle">
                    <i onclick="changeIcon(this)" class='bx bx-menu'></i>
                </label>
                <input type="checkbox" name="active" id="active" />
                <nav id="navOverlay">
                    <ul class="navLinks">
                        <li><a href="/">01 ABOUT NATOUS</a></li>
                        <li><a href="/">02 YOUR BENFITS</a></li>
                        <li><a href="/">03 POPULAR TOURS</a></li>
                        <li><a href="/">04 STORIES</a></li>
                        <li><a href="/">05 BOOK NOW</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Navbar