import React from "react";
import {View, Text} from "../../styled";
import styled, { keyframes } from "styled-components"

const show = keyframes`
    to{
        transform: translate(200px, 200px);
    }
`;

const MesAnimation = styled.div`
    position: relative;
    background-color: blue;
    width: 500px;
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