import React from 'react';
import {View, Text} from "../../styled";
import {GoPerson} from "react-icons/go";
// import Interests from '../Interests';

function About(){
    return(
        <View flex fD='column' justC='center' alignI='center' boxS='border-box'>
            <View w='80%' flex p='10px 0' fD='column' alignI='center'>
                <View flex justC='center' alignI='center' c='orange'>
                    <GoPerson/>
                    <h1>About Me</h1>
                </View>
                <Text fontSize='18px' lh='1.65' tAlign='justify'>
                    For now I work on a project, where I create a website in programing language JS with use React library
                    and styled-components technology, you can see it in my GitHub profile.Also, I studied programming at the 
                    university for a year, the topic of my diploma was "Developing an Automatic Fluid Controller", which I 
                    presented in Assembler programming language. It was rated excellent by the Admissions Committee․
                </Text>
            </View>
        </View>
    )
}

export default About