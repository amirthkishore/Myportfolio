import { AbstractStateHelper } from "../../abstracts/AbstractStateHelper";
import { Navbar } from "../../components/SideNavbar";

export class NavbarAction extends AbstractStateHelper<Navbar>{
    //private requestActions: Request;

    constructor(ctx: Navbar) {
        super(ctx);
        //this.requestActions = new Request(this);
    }

    getDefaultState = (): Navbar["state"] => {
        return {
            hideNav: true
        }
    }
}