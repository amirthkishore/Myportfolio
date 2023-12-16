import { Component } from "react";
import Typed from "typed.js";

export class Home extends Component {

    componentDidMount() {
        this.initializeTyped();
    }

    initializeTyped() {
        const typed = document.querySelector('.typed')
        if (typed) {
            let typed_strings = typed.getAttribute('data-typed-items')
            if (typed_strings) {
                let stringsArray = typed_strings.split(',')
                new Typed('.typed', {
                    strings: stringsArray,
                    loop: true,
                    typeSpeed: 100,
                    backSpeed: 50,
                    backDelay: 2000
                });
            }

        }
    }

    render() {
        return (
            <div>
                <img style={{ width: '100%' }} src="./images/background.jpg" />

                {/* <video autoPlay muted loop id="myVideo">
                    <source src="./images/video.mp4" type="video/mp4" />
                </video> */}

                <div className="my-heading">
                    <h1>Amirth Kishore</h1>
                    <h3>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></h3>

                    {/* <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div> */}

                </div>
            </div>
        )
    }

}