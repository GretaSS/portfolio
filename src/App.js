import React from "react";
import Loading from "./components/Loading";
import GlobalStyles from './styled/globalStyles';

const Home = React.lazy(() => import('./pages/Home') )

function App() {
    return (
        <React.Suspense fallback={<Loading/>}>
            {/* <Letter/>  sra het ka problem, chgitem home-ic a galu te voch*/}
            <GlobalStyles/>
            <Home/>
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