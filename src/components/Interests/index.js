import React from 'react'
import {View, Text} from "../../styled";
import styled from 'styled-components';

const Item = styled(View)`
    margin: 0px 5px;
    padding: 23px;
    height: 100%;
    flex: 0 1 20%;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: .5s cubic-bezier(0.04,-0.1, 0.54, 1.12);
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;

function Interests(){
    return(
        <View flex w='100%' p='5px 0' alignI='center' justC='center' fD='column'>
            <View c='orange' p='5px 0' fontSize='25px'>
                Interests/Hobies
            </View>
            <View flex w='100%' c='white' alignI='center' justC='space-around'>
                <Item bgImg='./src/assets/images/photography.jpg'>
                    <Text>
                        Photography
                    </Text>
                    
                </Item>
                <Item bgImg='./src/assets/images/dr2.jpg'>
                    Drawing
                </Item>
                <Item bgImg='./src/assets/images/bo3.jpg'>
                    Reading Books
                </Item>
                <Item bgImg='./src/assets/images/Ph.jpg'>
                    Photo Editing
                </Item> 
            </View>
        </View>
    )
}

export default Interests