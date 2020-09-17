import React from "react";
import {View, Text} from "../../styled";
import styled, { keyframes } from "styled-components"

const show = keyframes`
    to{
        transform: translate(200px, 200px);
    }
`;

const MesAnimation = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    background-color: blue;
    animation: ${show} 2s forwards;
`;

function Letter(){
    return(
        <MesAnimation>
            <Text c='aqua'>
                Letter
            </Text>
        </MesAnimation>
    )
}

export default Letter