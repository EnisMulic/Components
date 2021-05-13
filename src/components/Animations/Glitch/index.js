import React from "react";
import styled, { keyframes } from "styled-components";

const glitch = keyframes`
    0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
            0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
            0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
            -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
`;

const Wrapper = styled.body`
    @media (prefers-reduced-motion: reduce) {
        *,
        ::before,
        ::after {
            animation-delay: -1ms !important;
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            background-attachment: initial !important;
            scroll-behavior: auto !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
        }
    }
`;

const GlitchText = styled.p`
    color: white;
    font-family: sans-serif;

    font-size: ${(props) => props.size || "6rem"};
    font-weight: ${(props) => props.weight || "700"};

    position: relative;

    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

    animation: ${glitch} 2000ms infinite;
`;

const GlitchSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;

    &:first-child {
        animation: ${glitch} 650ms infinite;
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        transform: translate(-0.025em, -0.0125em);
        opacity: 0.8;
    }

    &:last-child {
        animation: ${glitch} 375ms infinite;
        clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
        transform: translate(0.0125em, 0.025em);
        opacity: 0.8;
    }
`;

const Glitch = (props) => {
    return (
        <Wrapper>
            <GlitchText {...props}>
                <GlitchSpan aria-hidden="true">{props.text}</GlitchSpan>
                {props.text}
                <GlitchSpan aria-hidden="true">{props.text}</GlitchSpan>
            </GlitchText>
        </Wrapper>
    );
};

export default Glitch;
