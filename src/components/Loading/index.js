import React from "react";
import View from "../../styled/View";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const LoadingAnimation = styled.div`
    margin: 0;
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-image: url("./src/assets/images/logo.svg");
    animation: ${rotate} 2s infinite ease-in-out;
`;

function Loading(){
    return(
        <View flex alignI='center' justC='center'>
            <LoadingAnimation/>
        </View>
    )
}

export default Loading
