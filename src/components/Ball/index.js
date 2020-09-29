import React from 'react';
import {View, Text} from "../../styled";
// import styled from 'styled-components';


function Ball(){
    return(
        <View flex justC='center' boxS='border-box'>
            <View flex bgColor='yellow' bRad='10px'>
                Ball
            </View>
        </View>
    )
}

export default Ball