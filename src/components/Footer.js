import {Component, React} from "react";

class Footer extends Component {

    render() {
        return <footer id="footer" className="container-fluid mt-auto border-top border-dark text-white bg-dark">
            <div className="row py-2">
                <div className="col text-center">
                    <a href="/#home" className="nav-link py-1">Kaizen Debate Club</a>
                    {/*<button id="darkModeSwitch" type="button" className="btn text-dark bg-white" onclick="changeMode()">Dark Mode</button>*/}
                </div>
                <div className="col d-flex justify-content-center">
                    <a className="pt-2" href="https://pja.edu.pl/en/">
                        <img id="pjait_logo" src="images/icons/logo-pjatk-white-text.png" width="108" height="56" alt="Polish-Japanese Academy of Information Technology"></img>
                    </a>
                </div>
                <div className="col text-center">
                    <a href="#/aboutus" className="nav-link text-danger">About Us</a>
                    <a href="https://www.instagram.com/debateclub_pjait?igsh=NzZyczdidm1iODlx">
                        <img id="instagram_logo" className="icon mx-1" src="images/icons/instagram-white.png" alt="Our Instagram"></img>
                    </a>
                </div>
            </div>
        </footer>
    }
}

export default Footer