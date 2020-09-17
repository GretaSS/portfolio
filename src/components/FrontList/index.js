import React from "react";
import {View, Text} from "../../styled";
// import styled, { keyframes } from "styled-components";

// const show = keyframes`
//     to{
//         transform: translate(200px, 200px);
//     }
// `;

// const MesAnimation = styled.div`
//     width: 200px;
//     height: 200px;
//     position: relative;
//     background-color: blue;
//     animation: ${show} 2s forwards;
// `;

function FrontList(){
    return(
        <View flex justC='center' alignI='center' bgColor='yellow'>
            <View w='400px'>
                <img src='./src/assets/images/logo.svg'/>
            </View>
            <Text fontSize='40px' >
                Greta Simonyan
            </Text>
        </View>
    )
}

export default FrontList