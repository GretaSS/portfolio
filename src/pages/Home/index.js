import React from "react";
// import {
//     Cover,
//     About,
//     Skills,
//     ExpEd,
//     Portfolio,
//     Contact
// }from '../../components';

// import Letter from '../../components/Letter';
import FrontList from '../../components/FrontList';
import About from '../../components/About';
import Contacts from '../../components/Contacts';
import Menu from '../../components/Menu';

function Home (){
    return(
        <>
            {/* <Letter/> */}
            <Menu/>
            <FrontList/>
            <About/>
            <Contacts/>
            {/* <Cover/> */}
            {/* <Skills/> */}
            {/* <ExpEd/> */}
            {/* <Portfolio/> */}
        </>
    )
}
export default Home