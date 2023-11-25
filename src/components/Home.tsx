import { Component } from "react";
import { Navbar } from "./SideNavbar";

export class Home extends Component{

    render() {
        return(
            <div>
                <Navbar />

                <div className="">
                <img style={{width: '100%'}} src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*WgXQ9o3ai3q0IrJt8Ku0Fw.jpeg"/>
                {/* <h1>Amirth Kishore</h1>
                <h3>I'm Software Developer</h3> */}
                </div>
                
                
            </div>
        )
    }

}