import logoWhite from "../../assets/img/logo-white.png";
import "./Navbar.css"
import 'boxicons'
function Navbar() {
    return (
        <header className="nav">
            <section className="container flexContainer">
                <figure className="navLogo">
                    <img src={logoWhite} alt="logo" />
                </figure>
                <label htmlFor="active" className="toggleButton" id="openToggle">
                    <box-icon name='menu' size="32px" color='#777777'></box-icon>
                </label>
                <input type="checkbox" name="active" id="active" />
                <nav id="navOverlay">
                    <ul className="navLinks">
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