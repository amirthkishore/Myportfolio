import { Component } from "react"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="./images/me.jpg" alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light"><a href="index.html">Amirth Kishore</a></h1>
                            <div className="social-links mt-3 text-center">
                                <a href="https://www.linkedin.com/in/amirth-kishore/" target="_blank" className="linkedin"><FaLinkedinIn/></a>
                                <a href="https://www.instagram.com/amirth_kishore/" target="_blank" className="instagram"><FaInstagram/></a>
                                <a href="https://www.facebook.com/amirth.kishore.r" target="_blank" className="facebook"><FaFacebookF/></a>
                                <a href="https://twitter.com/kishore_amirth" target="_blank" className="twitter"><FaXTwitter/></a>
                                <a href="#" target="_blank" className="whatsapp"><BsWhatsapp /></a>
                            </div>
                        </div>
                        <nav id="navbar" className="nav-menu navbar">
                            <ul>
                                <li><a href="#hero" className="nav-link scrollto active"> <i className="bi bi-house-door-fill"/> <span>Home</span></a></li>
                                <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person-fill"/> <span>About</span></a></li>
                                <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-file-earmark-person-fill"/> <span>Resume</span></a></li>
                                <li><a href="#portfolio" className="nav-link scrollto"><i className="bi bi-buildings-fill"/> <span>Portfolio</span></a></li>
                                <li><a href="#services" className="nav-link scrollto"><i className="bi bi-hdd-stack-fill"/> <span>Services</span></a></li>
                                <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-envelope-at-fill"/> <span>Contact</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}


