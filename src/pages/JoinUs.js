import {React,Component} from "react";
import ReactDOM from "react-dom/client";
import TextBlock from "../components/TextBlock";


class JoinUs extends Component {

    render() {

        return <div>
            <h1> Join Us! </h1>
            <Row></Row>
            <hr/>
            <TextBlock h2Content={"Contribute to our meetings"}
                       pContent={"Kaizen Debate Club is made by students, for students. To make our meetings engaging and practical, our members prepare their own presentations, exercises, debate topics, etc. If you’d like to organize something of your own, contact us."}></TextBlock>
            <TextBlock h2Content={"Join our team!"}
                       pContent={"We’re looking to expand our team, so if you believe that your skills can be beneficial to our club, feel free to contact us about it."}
                       childContent={<List></List>}></TextBlock>
            <SideNote></SideNote>

        </div>

    }

}

class SideNote extends Component {

    render() {
        return <div className="container-flex pt-2">
            <p className="side-note">
                We encourage everyone to treat our meetings as a formal occasion. That means dressing nicely, respecting
                each other, and minding your manners. That's not a "rule" you're forced to follow, that's simply our
                culture!
            </p>
        </div>
    }
}

class List extends Component {
    render() {
        return <ul>
            <li>
                Promotion specialist - We want this person to be responsible for overall promotion of our club, be it
                newsletters, social media, posters, or anything else. As such, we need someone creative and confident,
                who has unorthodox ideas in their head.
            </li>
            <br></br>
            <li>
                Fact-checker - This person will be responsible for reviewing any content submitted by our members, point out flaws, and review their sources. Fact-checkers should be diligent, attentive, and critical to any info they receive.
            </li>
            <br></br>
            <li>
                Somebody else - The Debate Club is open to suggestions. If you feel like you can contribute to the club in any other way, don’t hesitate to tell us all about it :)
            </li>
        </ul>
    }
}

class Row extends Component {

    render() {
        return <div className="row container-flex gx-5 py-2">
            <div className="col-sm">
                <p className="lead">Participate as a guest</p>
                <p>
                    Our meetings are open for everybody, you don’t need to sing up to participate — simply come to our
                    next meeting!
                    <br/> <br/> Kaizen Debate Club offers various activities designed for newcomers, so don't be
                    discouraged if you lack debating experience.
                </p>
            </div>
            <div className="col-sm">
                <p className="lead">Become a member</p>
                <p>
                    Debate club members can participate in our debate sessions. The can also play the role of judges,
                    fact-checkers and vote on important matters. Moreover, you will be added to our group chat!
                    <br/> <br/> To join us, speak with us during the meeting or email us.
                </p>
            </div>
        </div>
    }
}

export default JoinUs