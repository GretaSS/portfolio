import React from "react";
import {View, Text} from "../../styled";
// import styled, { keyframes } from "styled-components";
import {GoPerson} from "react-icons/go"; //about me
import {GoMortarBoard} from "react-icons/go"; //education

// const scr = keyframes`
//     to{
//         transform: translateY(25px);
//         color: #ececec;
//     }
// `;

// const Scroll = styled(View)`
//     color: white;
//     animation: ${scr} 1s infinite;
// `;

function Menu(){
    return(
        <View flex 
            fD='column' 
            bgColor='#ffb226'
            pos='fixed'
            z='99'
            p='10px 5px'
            boxSh='0px 11px 32px -9px rgba(0, 0, 0, 0.4)'
            bRad='0px 25px 25px 0px'
            top='30%'
            c='white'
        >
            <View flex alignI='center' p='5px 0px 0px 2px'>
                <GoPerson/>
                <Text>About Me</Text>
            </View>
            <View flex alignI='center' p='5px 0px 0px 2px'>
                <GoMortarBoard/>
                <Text>Education</Text>
            </View>
            <View flex alignI='center' p='5px 0px 0px 2px'>
                <GoPerson/>
                <Text>About Me</Text>
            </View>
            <View flex alignI='center' p='5px 0px 0px 2px'>
                <GoMortarBoard/>
                <Text>Education</Text>
            </View>
            <View flex alignI='center' p='5px 0px 0px 2px'>
                <GoPerson/>
                <Text>About Me</Text>
            </View>
            <View flex alignI='center' p='5px 0px 0px 2px'>
                <GoMortarBoard/>
                <Text>Education</Text>
            </View>
        </View>    
    )
}

export default Menu