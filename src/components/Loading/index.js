import React from "react";
import {View, Text} from "../../styled";
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const LoadingAnimation = styled.div`
    width: 500px;
    position: relative;
    background-color: green;
    animation: ${rotate} 3s infinite ease-in-out;
`;

function Loading(){
    return(
        <LoadingAnimation>
            HI
        </LoadingAnimation>
    )
}

export default Loading
