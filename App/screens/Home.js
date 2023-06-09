import React from 'react';
import { View,StatusBar,StyleSheet,Image , Dimensions } from 'react-native';
import colors from '../constants/colors'
import { ConversionInput } from '../components/ConversionInput';
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.blue,
        flex :1,
        justifyContent: "center"
    },
    logoContainer : {
        alignItems : "center",
        justifyContent : "center"
    },
    logoBackground : {
        width: screen.width *0.45,
        height : screen.width *0.45
    },
    logo : {
        position : "absolute",
        width: screen.width *0.25,
        height : screen.width *0.25
    }
});

export default () => {
    return (
        <View style = {styles.container}>
            <StatusBar barStyle={"default"} ></StatusBar>
            <View style ={styles.logoContainer} >
                <Image source = {require('../assets/images/background.png')} style = {styles.logoBackground} />
                <Image source={require('../assets/images/logo.png')} style = {styles.logo} resizeMode='contain' />
            </View>
            <ConversionInput
                text = "USD"
                value = "123"
                onButtonPress = {() => alert("todo!")}
                onChangeText = {text => {console.log("text",text)}}
                keyboardType = "numeric"
            />
            <ConversionInput
                text = "GRB"
                value = "467"
                onButtonPress = {() => alert("todo!")}
                onChangeText = {text => {console.log("text",text)}}
                keyboardType = "numeric"
                editable = {false}
            />
        </View>
    );
};