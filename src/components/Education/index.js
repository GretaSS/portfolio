import React from "react";
import {View, Text} from "../../styled";
// import styled from "styled-components";

function Education(){
    return(
        <View flex 
            c='white'
            p='10px 0'
            fD='column' 
            bRad='25px'
            justC='center'
            alignI='center'
            bgColor='#ffb226'
        >
            <View w='80%' flex p='10px 0' fD='column' alignI='center'>
                <View>
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
        </View>    
    )
}

export default Education