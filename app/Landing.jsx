import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {Marquee} from '@animatereactnative/marquee'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Colors from '@/services/Colors';
import { Redirect, router } from 'expo-router';

const Landing = () => {
    const imageList = [
        require('./../assets/images/1.jpg'),
        require('./../assets/images/c1.jpg'),
        require('./../assets/images/2.jpg'),
        require('./../assets/images/c2.jpg'),
        require('./../assets/images/3.jpg'),
        require('./../assets/images/6.jpg'),
        require('./../assets/images/4.jpg'),
        require('./../assets/images/c3.jpg'),
        require('./../assets/images/5.jpg'),
    ]
    return (
        <GestureHandlerRootView>
        <SafeAreaView>
            <Marquee 
                spacing={10}
                speed={0.8}
                style={{
                    transform:[{rotate:'-5deg'}],
                }}
            >
            <View style={styles.imageContainer}>
                {imageList.map((image,index)=>(
                    <Image key={index} source={image} style={styles.image}/>
                ))}
            </View>
            </Marquee>
            <Marquee 
                spacing={10}
                speed={0.5}
                style={{
                    transform:[{rotate:'-5deg'}],
                    marginTop:15
                }}
            >
            <View style={styles.imageContainer}>
                {imageList.map((image,index)=>(
                    <Image key={index} source={image} style={styles.image}/>
                ))}
            </View>
            </Marquee>
            <Marquee 
                spacing={10}
                speed={1}
                style={{
                    transform:[{rotate:'-5deg'}],
                    marginTop:15
                }}
            >
            <View style={styles.imageContainer}>
                {imageList.map((image,index)=>(
                    <Image key={index} source={image} style={styles.image}/>
                ))}
            </View>
            </Marquee>
            <View style={styles.container}>
                <Text style={{fontFamily:'s-bolditalic',fontSize:30,marginTop:10,margin:'3%',textAlign:'center'}}>Cookmate AI 🍲🔍| Find, Create & Enjoy Delicious Recipes!</Text>
                <Text style={{fontFamily:'s',fontSize:20,margin:'3%',textAlign:'center'}}>Generate delicious recipes in seconds with the power of Al!🍔✨</Text>
                <TouchableOpacity onPress={()=>{router.push('/(tabs)/Home')}} style={{width:'100%',height:'100%',display:'flex',alignItems:'center',}}>
                    <View  style={styles.buttonContainer}>
                        <Text style={styles.button}>Get Started</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default Landing

const styles = StyleSheet.create({
    image:{
        height:160,
        width:160,
        borderRadius:25
    },
    imageContainer:{
        display:'flex',
        flexDirection:'row',
        gap:10
    },
    container:{
        height:'100%',
        backgroundColor: Colors.White,
        display:'flex',
        alignItems:'center',
    },
    buttonContainer:{
        width:'80%',
        height:'4%',
        borderRadius:25,
        backgroundColor:Colors.Primary,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'3%'
    },
    button:{
        fontSize:20,
        fontFamily:'s',
        color:Colors.White,
    }
})