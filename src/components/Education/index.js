import React from "react";
import {View, Text} from "../../styled";
// import styled from "styled-components";
import {GoMortarBoard} from "react-icons/go"; //education

function Education(){
    return(
        <View flex 
            fD='column' 
            alignI='center'
            bgColor='#ffb226'
            bRad='25px'
            boxSh='0px 11px 32px -9px rgba(0, 0, 0, 0.4)'
        >
            
            <GoMortarBoard/>
            <Text>Education</Text>
            <Text>
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