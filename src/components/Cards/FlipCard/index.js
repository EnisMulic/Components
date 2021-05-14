import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
    background-color: transparent;
    perspective: 1000px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }

    transition: transform 0.6s;
    transform-style: preserve-3d;
    text-align: center;
    :hover {
        ${(props) =>
            props.rotate === "xAxis"
                ? css`
                      transform: rotateX(180deg);
                  `
                : css`
                      transform: rotateY(180deg);
                  `}
    }
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
`;

const FlipCardFront = styled.div`
    object-fit: cover;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
    word-wrap: break-word;
`;

const FlipCardBack = styled.div`
    object-fit: cover;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
    word-wrap: break-word;
    ${(props) =>
        props.rotate === "xAxis"
            ? css`
                  transform: rotateX(180deg);
              `
            : css`
                  transform: rotateY(180deg);
              `}
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
