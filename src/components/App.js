import React from "react";
import Loading from "./Loading";
// import Letter from "./Letter";
// import FrontList from "./FrontList";
import {View, Text} from "../styled";

const Letter = React.lazy(() => import('./Letter') )
const FrontList = React.lazy(() => import('./FrontList') )

function App() {
    return (
        <React.Suspense fallback={<Loading/>}>
            {/* <OtherComponent/> */}
            {/* <Letter/>  */}
            <FrontList/>
        </React.Suspense>
    );   
}

export default App;


// import React, { Component } from "react";
// import Letter from "./Letter";
// import Loading from "./Loading";
// import {View, Text} from "../styled";
// // import '../styles/App.css'; erevi indz petq chi sa

// class App extends Component {
//     render() {
//         return (
//             <View>
//                 <Loading/>
//                 <h1>My Clear React App! about portfolio </h1>
//                 <Letter/>                
//             </View>
//         );
//     }
// }

// export default App;