import { Component } from "react";
import 'boxicons/css/boxicons.min.css';


export class Home extends Component {

    /* componentDidMount() {
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
    } */

    render() {
        return (
            <div>

                <section className="home" id="Home">
                    <div className="home-content">

                        <h3>Hello, It's Me</h3>
                        <h1>AMIRTH KISHORE R</h1>
                        <h4>I'm a Engineering student who is<br />
                            passionate in <span className="text"> software developer</span></h4>

                        <div className="img">
                            <img src=".\images\me.jpg" className="responsive" />
                        </div>

                        <div className="home-sci">
                            <a href="https://www.linkedin.com/in/amirth-kishore/" target="_blank"><i className="bx bxl-linkedin" /></a>
                            <a href="https://github.com/amirthkishore" target="_blank"><i className='bx bxl-github' /></a>
                            <a href="https://www.facebook.com/amirth.kishore.r" target="_blank"><i className='bx bxl-facebook' /></a>
                            <a href="https://www.instagram.com/amirth_kishore/" target="_blank"><i className='bx bxl-instagram' /></a>
                            <a href="https://www.youtube.com/channel/UCqt5cqo9JNlkMTSgfQbuoJQ" target="_blank"><i className='bx bxl-youtube' /></a>
                            <a href="https://join.skype.com/invite/yuPp9ryvOy3i" target="_blank"><i className='bx bxl-skype' /></a>
                        </div>
                        <a href="https://drive.google.com/file/d/1fUozeRPpl2DCVTi45O0EF3vrOBjpcYCe/view?usp=sharing" className="btn-box" target="_blank">Download Resume</a>
                    </div>
                </section>

                {/*<img style={{ width: '100%' }} src="./images/background.jpg" />

                 <video autoPlay muted loop id="myVideo">
                    <source src="./images/video.mp4" type="video/mp4" />
                </video> * /}

                <div className="my-heading">
                    <h1>Amirth Kishore</h1>
                    <h3>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></h3>

                    {/* <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div> 

                </div>*/}
            </div>
        )
    }

}