import React from "react";
import {Text,StyleSheet,View} from 'react-native'

const ComponentsScreen = ()=>{
    const myName = "Abhijeet"
    return (
    <View>
        <Text style={styles.textStyle}>Getting started react native</Text>
        <Text>Hi my name is {myName}</Text>

    </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    suHeaderStyle:{
        fontSize:30
    }
})

export default ComponentsScreen;