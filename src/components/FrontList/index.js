import React from "react";
import {View, Text} from "../../styled";
import styled from "styled-components";

const MyImg = styled.img`
    width: 150px;
    height: 200px;
`;

const Scroll = styled.div`
    width: 100%;
    color: white;
    display: flex;
    font-size: 30px;
    justify-content: center;
    transition: 0.5s;
    :hover&{
        transform: translateY(10px);
        color: black;
    }
`;

function FrontList(){
    return(
        <View flex fD='column' justC='center' alignI='center' bgColor='yellow'>
            <View flex justC='center' alignI='center'>
                <View w='100px' h='200px' bgImg="./src/assets/images/hands.jpg">
                    {/* <MyImg src='./src/assets/images/hands.jpg'/> */}
                </View>
                <Text fontSize='40px' >
                    Greta Simonyan
                </Text>
            </View>
            <Scroll>
                Scroll ↓↓↓
            </Scroll>
        </View>    
    )
}

export default FrontList