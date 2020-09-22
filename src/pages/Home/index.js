import React from "react";
// import {
//     Cover,
//     Header,
//     About,
//     Skills,
//     ExpEd,
//     Portfolio,
//     Contact
// }from '../../components';

// import Letter from '../../components/Letter';
import FrontList from '../../components/FrontList';
import About from '../../components/About';

function Home (){
    return(
        <>
            {/* <Letter/> */}
            <FrontList/>
            <About/>
            {/* <Cover/>
            <Header/> */}
            {/* <Skills/> */}
            {/* <ExpEd/> */}
            {/* <Portfolio/> */}
            {/* <Contact/> */}
        </>
    )
}
export default Home