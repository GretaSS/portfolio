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
        <View flex justC='space-around' alignI='center' bgColor='#ff9800'>
            <View flex fD='column' justC='space-around' alignI='center' >
                <GoPerson/>
                <View flex fD='column' alignI='center'>
                    About Me
                </View>
            </View>
            
        </View>    
    )
}

export default Menu