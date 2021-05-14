import FlipCard from ".";

import PlayingCardFront from "../../../assets/PlayingCardFront.jpg";
import PlayingCardBack from "../../../assets/PlayingCardBack.jpg";

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

const Template = (args) => <FlipCard {...args} />;

export const ImageCard = Template.bind({});

export const TextCard = Template.bind({});
TextCard.args = {
    front: "Front",
    back: "Back",
};
