import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{router.push('/(tabs)/Profile')}}>
            <Image
                source={require('./../assets/images/i4.png')}
                style={styles.image}
            /></TouchableOpacity>
            <View style={{display:'flex',alignContent:'center'}}>
                <Text style={styles.text1}>Hello, Sandra</Text>
                <Text style={styles.text2}>Today 25 Nov.</Text>
            </View>
            <TouchableOpacity onPress={()=>{router.push('/(tabs)/Explore')}}>
            <View style={styles.searchContainer}>
            <Feather name="search" size={24} color="black" style={styles.search}/>
            </View></TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:'15',
        marginBottom:'-52%'
    },
    image:{
        height:'22%',
        width:'50%',
        marginLeft:'25%'
    },
    text1:{
        fontFamily:'s-bold',
        fontSize:18,
        textAlign:'center'
    },
    text2:{
        fontFamily:'s',
        fontSize:14,
        textAlign:'center'
    },
    search:{
        marginHorizontal:'7%'
    },
    searchContainer:{
        height:35,
        width:33,
        backgroundColor:'white',
        marginHorizontal:'4%',
        borderWidth:0.5,
        borderRadius:99,
        borderColor:'gray',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
    },
})