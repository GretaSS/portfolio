import React, { Component } from "react";
import Letter from "./Letter";
import {View, Text} from "../styled";
// import '../styles/App.css'; erevi indz petq chi sa

class App extends Component {
    render() {
        return (
            <View c='red'>
                <h1>My Clear React App! about portfolio </h1>
                <Letter/>                
            </View>
        );
    }
}

export default App;