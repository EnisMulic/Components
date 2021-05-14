import React from "react";
import styled from "styled-components";

const Tag = styled.div`
    border: 1px solid ${(props) => props.border || "#fff"};
    display: inline-block;
    font-size: 80%;
    padding: 0.3125rem 0.9375rem;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-radius: 20px;
    margin-right: 0.3125rem;
    margin-bottom: 0.3125rem;
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
`;

const RoundedTag = (props) => {
    return <Tag {...props}>{props.value}</Tag>;
};

export default RoundedTag;
