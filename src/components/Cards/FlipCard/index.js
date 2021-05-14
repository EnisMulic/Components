import React from "react";
import styled, { css } from "styled-components";

const SizeCss = css`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const Wrapper = styled.div`
    background-color: transparent;
    perspective: 1000px;
    ${SizeCss}

    img {
        ${SizeCss}
    }

    text-align: center;
`;

const RotateCss = css`
    transform: ${({ rotate }) =>
        rotate === "xAxis" ? "rotateX(180deg)" : "rotateY(180deg)"};
`;

const FlipCardInner = styled.div`
    position: relative;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    margin: auto;

    transition: transform 0.6s;
    transform-style: preserve-3d;
    :hover {
        ${RotateCss}
    }
`;

const FlipCardCss = css`
    object-fit: cover;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
`;

const FlipCardFront = styled.div`
    ${FlipCardCss}
`;

const FlipCardBack = styled.div`
    ${FlipCardCss}
    ${RotateCss}
`;

const FlipCard = (props) => {
    const { rotate = "yAxis", front, back, width, height } = props;

    return (
        <Wrapper width={width} height={height}>
            <FlipCardInner rotate={rotate}>
                <FlipCardFront>{front}</FlipCardFront>
                <FlipCardBack rotate={rotate}>{back}</FlipCardBack>
            </FlipCardInner>
        </Wrapper>
    );
};

export default FlipCard;
