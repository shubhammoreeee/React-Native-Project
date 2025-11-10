import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router';
import { Ionicons} from '@expo/vector-icons';

const SettingApp = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{router.push('/Setting')}} style={styles.touchable}>
          <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.search1}/>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'45%',flex:1}}><Text style={{fontFamily:'s-bolditalic',fontSize:40}}>Setting of this app</Text></View>
        
    </SafeAreaView>
  )
}

export default SettingApp

const styles = StyleSheet.create({
    container:{
        marginVertical:'15',
        gap:25
    },
    search1:{
        height:'100%',
        width:'100%',
        marginHorizontal:'5%',
        marginTop:'3%'
    },
    touchable:{
        height:'25%',
        width:'5%',
        marginHorizontal:'5%',
        marginTop:'2%'
    }
})