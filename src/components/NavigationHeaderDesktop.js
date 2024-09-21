import {Component, React} from "react";

class NavigationHeaderDesktop extends Component {


    render() {

        console.log()
        return <header>
            <div className="navbar-list">
                <nav id="header_navbar" className="navbar justify-content-center navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/rules">Rules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/joinus">Join Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#/news">News</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}

export default NavigationHeaderDesktop