import React from "react";
import {View, Text} from "../../styled";
import styled, { keyframes } from "styled-components"

const show = keyframes`
    from{
        transform: translate(0px, 0px);
    }
    to{
        transform: translate(200px, 200px);
    }
`;

const MesAnimation = styled.div`
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