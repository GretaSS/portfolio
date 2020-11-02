import React from 'react';
import {View, Text} from "../../styled";
import styled, {keyframes} from 'styled-components';

const step = keyframes`
    to{
        transform: translateY(105px);
        color: #ececec;
    }
`;

const Jump = styled(View)`
    animation: ${step} 2s alternate infinite;
`;

function Ball(){
    return(
        <View flex justC='center' boxS='border-box'>
            <Jump flex 
                w='15px' 
                h='15px' 
                bRad='10px'
                bgColor='orange' 
            >
            </Jump>
        </View>
    )
}

export default Ball