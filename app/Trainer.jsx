import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import { Redirect, router } from 'expo-router';

const Trainer = () => {
    return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#fff' }}>
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('./../assets/images/yoga.png')} style={styles.image}/>
            <TouchableOpacity onPress={()=>{router.push('/(tabs)/Explore')}} style={styles.touchable}>
                <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.search1}/>
            </TouchableOpacity>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            <Text style={{color:'white',fontFamily:'s-bold',fontSize:22,position:'absolute',bottom:'50%',left:'5%'}}>Yoga Group</Text>
            <Text style={{color:'white',fontFamily:'s-regular',fontSize:18,position:'absolute',bottom:'48%',left:'5%'}}>Trainer: Tiffany Way</Text>
            <View style={styles.discription}>
                <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:'5%',margin:'5%'}}>
                    <Text style={{fontFamily:'s-regular',fontSize:18}}>Next exercise</Text>
                    <Text style={{fontFamily:'s-regular',fontSize:18,color:'gray'}}><Text style={{color:'black'}}>2 </Text>of 6</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',gap:15,margin:'5%'}}>
                    <Image source={require('./../assets/images/yogaLandscape.png')} style={styles.image1}></Image>
                    <View>
                        <Text style={{fontFamily:'s-bolditalic',fontSize:16}}>Snake pose</Text>
                        <Text style={{color:'gray',fontFamily:'s-regular'}}>5 min</Text>
                        <View style={{display:'flex',flexDirection:'row',gap:15,marginTop:'3%'}}>
                            <View style={{height:'55%',width:'30%',backgroundColor:'#f4bd56ff',borderRadius:25,display:'flex',justifyContent:'center',alignItems:'center'}}><Text>115 kcal</Text></View>
                            <View style={{height:'55%',width:'30%',backgroundColor:'#cbc7edff',borderRadius:25,display:'flex',justifyContent:'center',alignItems:'center'}}><Text>Medium</Text></View>
                        </View>
                    </View>
                </View>
                <Text style={{margin:'5%',marginTop:'-20%',fontFamily:'s-regular',fontSize:16}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut excepturi vero fuga totam ab minima quis ipsa, eos nam pariatur atque recusandae maiores voluptate aliquam reiciendis consequatur sed perspiciatis laudantium praesentium eveniet. Tempora, distinctio est itaque reprehenderit labore alias?</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    </GestureHandlerRootView>
    )
}

export default Trainer

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        flexGrow: 1,
        backgroundColor: '#fff' 
    },
    image:{
        height:'60%',
        width:'100%',
    },
    discription:{
        backgroundColor:'white',
        borderRadius:38,
        marginTop:'-6%'
    },
    image1:{
        height:'50%',
        width:'25%',
        borderRadius:8
    },
    search1:{
        position:'absolute',
        top:'-60%',
        left:'5%',
    },
    search:{
        position:'absolute',
        top:'3%',
        right:'5%'
    },
    touchable:{
        position: 'absolute',
        top:'3%',
        left: '5%',
        elevation: 5,
        zIndex: 10,
    }
})