import React from "react";

import style from "./FlipCard.module.css";

const FlipCard = (props) => {
    const { size = "medium", rotate = "yAxis", front, back } = props;
    return (
        <div className={[style.flipCard, style[size]].join(" ")}>
            <div className={[style.flipCardInner, style[rotate]].join(" ")}>
                <div className={style.flipCardFront}>{front}</div>
                <div className={[style.flipCardBack, style[rotate]].join(" ")}>
                    {back}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
