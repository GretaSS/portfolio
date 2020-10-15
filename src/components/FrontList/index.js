import React from "react";
import {View, Text} from "../../styled";
import styled, { keyframes } from "styled-components";
// import Ball from '../Ball';

const scr = keyframes`
    to{
        transform: translateY(25px);
        color: #ececec;
    }
`;

const Scroll = styled(View)`
    color: white;
    animation: ${scr} 1s infinite;
`;

function FrontList(){
    return(
        <View flex h='99vh' fD='column' justC='space-around' alignI='center' bgColor='#ff9800'>
            <View w='50%' flex justC='space-around' alignI='center' >
                <View w='200px' 
                    h='250px' 
                    bgSize='100%' 
                    bgRep='no-repeat' 
                    bgImg="./src/assets/images/hands.jpg"
                >
                </View>
                <View flex fD='column' alignI='center'>
                    <Text fontSize='40px' c='white'>
                        Greta 
                    </Text>
                    <Text fontSize='40px' c='white'>
                        Simonyan
                    </Text>
                </View>
            </View>
            <Scroll flex justC='center' w='100%' op='0.5' fontSize='40px'>
               ↓↓↓ Scroll ↓↓↓
            </Scroll>
        </View>    
    )
}

export default FrontList