import FlipCard from "../../components/Cards/FlipCard";

import PlayingCardFront from "../../assets/PlayingCardFront.jpg";
import PlayingCardBack from "../../assets/PlayingCardBack.jpg";

export default {
    title: "Cards/FlipCard",
    argTypes: {
        rotate: {
            defaultValue: "yAxis",
            control: {
                type: "radio",
                options: ["xAxis", "yAxis"],
            },
        },
        width: {
            defaultValue: "150px",
            control: {
                type: "text",
            },
        },
        height: {
            defaultValue: "200px",
            control: {
                type: "text",
            },
        },
        front: {
            defaultValue: <img src={PlayingCardFront} alt="Ace of Spades" />,
        },
        back: {
            defaultValue: <img src={PlayingCardBack} alt="Card back" />,
        },
    },
};

export const Card = (args) => <FlipCard {...args} />;
