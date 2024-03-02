import { Component } from "react";
import { Navbar } from "./Navbar";
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