import React,{Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default class JournalCreate extends Component
{
    render()
    {
        return(
            <View style={styles.ViewStyle}>
                <TextInput  style={styles.txtStyle}
                            placeholder={"Type"}
                            placeholderTextColor={"#FF0000"}
                            />
                
                <TextInput  placeholder={"Date"}
                            placeholderTextColor={"#FF0000"}
                            keyboardType={"numberic"}
                            style={styles.txtStyle}
                            />
                
                <TextInput  placeholder={"Mood"}
                            placeholderTextColor={"#FF0000"}
                            style={styles.txtStyle}
                            />
                
                <TextInput  placeholder={"Title"}
                            placeholderTextColor={"#FF0000"}
                            style={styles.txtStyle}
                            />
                
                <TextInput  placeholder={"Message"}
                            placeholderTextColor={"#FF0000"}
                            style={styles.txtStyle}
                            />
                <Button
                        title={"Save"}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    ViewStyle:
    {
        flex:1,
        padding:20,
        marginTop:10
    },
    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'red',
        marginBottom:20
    }
});