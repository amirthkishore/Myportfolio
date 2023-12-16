import { Component } from "react";
import { Navbar } from "./SideNavbar";
import { Home } from "./Home";

export class Main extends Component {

    render() {
        return (
            <div>
                <Navbar />

                <Home />


            </div>
        )
    }

}