import { Component } from "react"
//import { FaFacebookF } from "react-icons";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="" alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light"><a href="index.html">Amirth Kishore</a></h1>
                            <div className="social-links mt-3 text-center">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="FaFacebookF" /></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
                                <a href="#" className="google-plus"><i className="fa fa-skype" /></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
                            </div>
                        </div>
                        <nav id="navbar" className="nav-menu navbar">
                            <ul>
                                <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                                <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                                <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
                                <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
                                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}


