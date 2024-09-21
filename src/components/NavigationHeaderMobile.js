import {Component, React} from "react";


// Change Debate Club to Home after navbar collapse
const changeRedirectionName = () => {

    const homeRedirection = document.getElementById("homeRedirection");

    if (homeRedirection.textContent === "Home"){
        homeRedirection.textContent = "Debate Club";
    } else {
        homeRedirection.textContent = "Home";
    }
}
class NavigationHeaderMobile extends Component {



    render() {

        return <header><div className="navbar-collapse">
                <nav id="header_navbar_mobile" className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">

                        <a className="navbar-brand" id="homeRedirection" href="#/home">Debate Club</a>

                        <button onClick={changeRedirectionName} className="navbar-toggler" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#/rules">Rules</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/joinus">Join Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/news">News</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    }
}

export default NavigationHeaderMobile