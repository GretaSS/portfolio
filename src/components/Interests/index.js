import React, { useState } from 'react'
import {View, Text} from "../../styled";

function Interests(){
    const [count, setCount] = useState({
        images: [
            './src/assets/images/photography.jpg',
            './src/assets/images/photography.jpg'
        ], 
    });

    return(
        <View flex alignI='center' fD='column' fontSize='18px' lh='1.65'>
            <View c='orange' fontSize='25px'>Interests/Hobies</View>
            <View flex c='white' alignI='center' justC='center'>
                <View m='5px' 
                    p='15px' 
                    bgColor='pink' 
                    bRad='30px 5px 20px 5px'
                    bgRep='no-repeat'
                    bgSize='100%'
                    bgImg={count}
                >
                    -Photography
                </View>
                <View m='5px' 
                    p='15px' 
                    bgColor='pink' 
                    bRad='30px 5px 20px 5px'
                    bgRep='no-repeat'
                    bgSize='100%'
                    bgImg='./src/assets/images/photography.jpg'
                >
                    -Drawing
                </View>
                <View m='5px'
                    p='15px' 
                    bgColor='pink' 
                    bRad='30px 5px 20px 5px'
                    bgRep='no-repeat'
                    bgSize='100%'
                    bgImg='./src/assets/images/photography.jpg'
                >
                    -Reading Detective Books
                </View>
                <View m='5px'
                    p='15px' 
                    bgColor='pink' 
                    bRad='30px 5px 20px 5px'
                    bgRep='no-repeat'
                    bgSize='100%'
                    bgImg='./src/assets/images/photography.jpg'
                >
                    -Photoshop
                </View> 
            </View>
        </View>
    )
}

export default Interests