import React from 'react';
import {View, Text} from "../../styled";
import styled from 'styled-components';
import {
    FiPhone,
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

const Link = styled.a`
    margin: 8px;
    padding: 5px;
    color: white;
    // text-decoration: none;
    // fontSize: 17px;
`;

function Contacts(){
    return(
        <View flex justC='center' boxS='border-box' bgColor='orange'>
            <Link href="https://github.com/GretaSS"><FiGithub/></Link>
            <Link href="https://www.linkedin.com/in/greta-simonyan-a20492158/"><FiLinkedin/></Link>
            <Link href="gsimonyan228@gmail.com"><FiMail/></Link>
            <Link href="#+374 93 069 263"><FiPhone/></Link>
        </View>
    )
}

export default Contacts