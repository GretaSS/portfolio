import React from 'react'
import {View, Text} from "../../styled";
import styled from 'styled-components';

const Item = styled(View)`
    margin: 5px 0px;
    padding: 23px;
    width: 15%;
    height: 100%;
    flex: 0 1 20%;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: .5s cubic-bezier(0.04,-0.1, 0.54, 1.12);
    filter: grayscale(100%);
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
        filter: grayscale(0%);
    }
`;

function Interests(){
    return(
        <View flex p='5px 0' alignI='center' justC='center' fD='column'>
            <View c='orange'>
                <h1>Interests/Hobbies</h1>
            </View>
            <View flex 
                w='100%' 
                c='white' 
                p='5px 0' 
                fD='column' 
                alignI='center' 
                justC='space-around'
            >
                <Item bgImg='./src/assets/images/photography.jpg'>
                    Photography
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