import {React} from "react";

const DocumentsNavigationResponsive = () => {

    return <nav aria-label="Rules">
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link text-dark" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link text-dark" href="#">General Rules</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">Paris Style</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">Kaizen Style</a></li>
            <li className="page-item">
                <a className="page-link text-dark" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
}

export default DocumentsNavigationResponsive