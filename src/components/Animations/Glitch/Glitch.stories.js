import React from "react";

import Glitch from ".";

export default {
    title: "Animations/Glitch",
    argTypes: {
        text: {
            defaultValue: "Text",
            control: {
                type: "text",
            },
        },
        size: {
            defaultValue: "6rem",
            control: {
                type: "text",
            },
        },
        weight: {
            defaultValue: "700",
            control: {
                type: "text",
            },
        },
    },
};

export const GlitchText = (args) => <Glitch {...args} />;
