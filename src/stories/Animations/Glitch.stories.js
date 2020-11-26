import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Glitch from "../../components/Animations/Glitch";

export default {
    title: "Animations/Glitch",
    decorators: [withKnobs],
};

export const GlitchText = () => <Glitch text={text("Text", "Text")} />;
