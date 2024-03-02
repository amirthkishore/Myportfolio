import { Component } from "react";

export class Navbar extends Component {

    render() {
        return (
            <header className="header">
                <a href="#" className="logo"> <img src=".\images\profile.png" style={{ width: "65px" }} /> Portfolio </a>
                <nav className="navbar" id="myLinks">
                    <a href="#Home" className="active" >Home</a>
                    <a href="#About">About</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </nav>
            </header>
        )
    }
}


