import React from "react";

import style from "./Glitch.module.css";

const Glitch = (props) => {
    return (
        <p className={style.glitch}>
            <span aria-hidden="true">{props.text}</span>
            {props.text}
            <span aria-hidden="true">{props.text}</span>
        </p>
    );
};

export default Glitch;
