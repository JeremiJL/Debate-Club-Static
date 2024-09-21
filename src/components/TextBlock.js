import {Component, React} from "react";

class TextBlock extends Component {
    render() {
        return <div className="container-flex pt-0">
            <p className="side-note">{this.props.sideNoteContent}</p>
            <h2>{this.props.h2Content}</h2>
            <p>{this.props.pContent}</p>
            <p className="highlighted-quote">{this.props.quoteContent}</p>
            <div className="pb-1">{this.props.childContent}</div>
            <hr></hr>
        </div>
    }
}

export default TextBlock