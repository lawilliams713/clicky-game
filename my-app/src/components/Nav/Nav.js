import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            {/* <li><a href="/">Clicky Game - Dogs Edition!</a></li> */}
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Nav;