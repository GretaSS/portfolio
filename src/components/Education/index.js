import React from "react";
import {View, Text} from "../../styled";
// import styled from "styled-components";
import {GoMortarBoard} from "react-icons/go"; //education

function Education(){
    return(
        <View flex 
            m='10px 0'
            c='white'
            p='10px 0'
            pos='absolute'
            // bottom='5%'
            bRad='25px'
            fD='column' 
            alignI='center'
            bgColor='#ffb226'
            boxSh='0px 11px 32px -9px rgba(0, 0, 0, 0.4)'
        >
            <View flex justC='center' alignI='center'>
                <GoMortarBoard/>
                <h1>Education</h1>
            </View>
            
            <Text p='10px 5px' fontSize='18px' lh='1.65' tAlign='justify'>
                Bachelor's degree
                The National Politechnic University of Armenia (2015-2019) Majoring In Electronic Equipment Science 
                Specialization Digital Electronic Systems 
                Magistrate's degree
                The National Politechnic University of Armenia (2019-present) Majoring In Electronic Equipment Science
                Specialization Digital Electronic Systems
            </Text>
        </View>    
    )
}

export default Education