import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView,StyleSheet,Linking, Alert} from 'react-native';
import colors from '../constants/colors'
import { Entypo } from "@expo/vector-icons"
import { RowItem, RowSeperator } from '../components/RowItem'


const styles = StyleSheet.create({
    seperator : {
        backgroundColor : colors.border,
        height : StyleSheet.hairlineWidth,
        marginLeft : 20,
        marginRight : 20
    }
});




const openUrl = (url) => {
    Linking.openURL(url).catch(()=> {
        Alert.alert("something went wrong!"," Please try again")
    });
} ;

export default  () => {
    return (
        <SafeAreaView style = {{flex :1}}>
            <ScrollView>
                <RowItem 
                    text = "Themes"
                    onPress = { () => openUrl("https://www.reactnativeschool.com/react-native-basics")}
                    rightIcon = {
                        <Entypo name='chevron-right' color = {colors.blue} size={20} />
                    }
                />
                <RowSeperator />
                <RowItem 
                    text = "React Native basics"
                    onPress = { () => alert("todo!")}
                    rightIcon = {
                        <Entypo name='export' color = {colors.blue} size={20} />
                    }
                />
                <RowSeperator />
                <RowItem 
                    text = "React Native School"
                    onPress = { () => alert("todo!")}
                    rightIcon = {
                        <Entypo name='export' color = {colors.blue} size={20} />
                    }
                />

            </ScrollView>
        </SafeAreaView>
    );
};

