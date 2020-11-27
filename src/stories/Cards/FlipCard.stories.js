import React from "react";
import FlipCard from "../../components/Cards/FlipCard";

import PlayingCardFront from "../../assets/PlayingCardFront.jpg";
import PlayingCardBack from "../../assets/PlayingCardBack.jpg";

export default {
    title: "Cards/FlipCard",
};

export const FlipCardSmall = () => (
    <FlipCard
        size="small"
        front={<img src={PlayingCardFront} alt="Ace of Spades" />}
        back={<img src={PlayingCardBack} alt="Card back" />}
    />
);

export const FlipCardMedium = () => (
    <FlipCard
        size="medium"
        front={<img src={PlayingCardFront} alt="Ace of Spades" />}
        back={<img src={PlayingCardBack} alt="Card back" />}
    />
);

export const FlipCardLarge = () => (
    <FlipCard
        size="large"
        front={<img src={PlayingCardFront} alt="Ace of Spades" />}
        back={<img src={PlayingCardBack} alt="Card back" />}
    />
);

export const FlipCardRoteteX = () => (
    <FlipCard
        size="medium"
        rotate="xAxis"
        front={<img src={PlayingCardFront} alt="Ace of Spades" />}
        back={<img src={PlayingCardBack} alt="Card back" />}
    />
);
