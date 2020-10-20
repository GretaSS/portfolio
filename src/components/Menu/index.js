import React from "react";
import {View, Text} from "../../styled";
import styled from "styled-components";
import {GoPerson,GoMortarBoard} from "react-icons/go"; //about,education
import {RiPaletteLine} from "react-icons/ri"; //interests
import {FiPhone,FiFolder} from "react-icons/fi"; //contacts,portfolio

const MenuItem = styled.a`
    color: white;
    display: flex;
    align-item: center;
    text-decoration: none;
    letter-spacing: 0.5px;
    padding: 5px 0px 0px 2px;
    &:hover{
        cursor: pointer;
        transform: translateX(1px);
    }
`;


function Menu(){
    return(
        <View flex 
            z='99'
            top='30%'
            fD='column' 
            pos='fixed'
            p='10px 5px'
            bgColor='#ffb226'
            bRad='0px 25px 25px 0px'
            boxSh='0px 11px 32px -9px rgba(0, 0, 0, 0.4)'
        >
            <MenuItem href='#'>
                <GoPerson/>
                <Text>About Me</Text>
            </MenuItem>
            <MenuItem href='#'>
                <GoMortarBoard/>
                <Text>Education</Text>
            </MenuItem>
            <MenuItem href='#'>
                <RiPaletteLine/>
                <Text>Interests</Text>
            </MenuItem>
            <MenuItem href='#'>
                <FiPhone/>
                <Text>Contacts</Text>
            </MenuItem>
            <MenuItem href='#'>
                <FiFolder/>
                <Text>Portfolio</Text>
            </MenuItem>
        </View>    
    )
}

export default Menu