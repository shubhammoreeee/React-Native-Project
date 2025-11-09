import { StyleSheet, Text, View, Input, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/services/Colors';
import {Marquee} from '@animatereactnative/marquee'
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import { Redirect, router } from 'expo-router';

const Explore = () => {
  const [text, setText] = useState('');
  const imageList = [
        require('./../../assets/images/1j.png'),
        require('./../../assets/images/c1j.png'),
        require('./../../assets/images/2j.png'),
        require('./../../assets/images/c2j.png'),
        require('./../../assets/images/3j.png'),
        require('./../../assets/images/6j.png'),
        require('./../../assets/images/4j.png'),
        require('./../../assets/images/c3j.png'),
        require('./../../assets/images/5j.png'),
    ]
  return (
    <GestureHandlerRootView>
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="black" style={styles.search}/>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder='Looking for Yoga Exercise'
          style={{marginRight:'30%'}}
          onSubmitEditing={() => setText('')} 
        ></TextInput>
      </View>
      <View>
        <Marquee 
          spacing={10}
          speed={0.3}
          style={{
            transform:[{rotate:'0deg'}],
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image,index)=>(
              <View key={index} style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
              <Image key={index} source={image} blurRadius={5} style={styles.image}/>
              <Text style={{textAlign:'center',marginTop:'-55%',color:Colors.White,fontFamily:'s-regular',fontSize:20}}>{[index === 0 ? 'Yoga' : null,index === 1 ? 'Gym' : null,index === 2 ? 'Yoga' : null,index === 3 ? 'Gym' : null,index === 4 ? 'Yoga' : null,index === 5 ? 'Gym' : null,index === 6 ? 'Yoga' : null,index === 7 ? 'Gym' : null,index === 8 ? 'Yoga' : null]}</Text>
              </View>
            ))}
          </View>
        </Marquee>
      </View>
      <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
            <Text style={{fontFamily:'s-bold',fontSize:20,marginTop:'22%',margin:'5%'}}>Explore Yoga's</Text>
          </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
        gap:15,
        marginTop:'-10%'}}>
          
        <View style={styles.CardContainer}>
          <TouchableOpacity onPress={()=>{router.push('/Trainer')}} style={{height:'100%',width:'100%',marginTop:'40%'}}>
            <Image source={require('./../../assets/images/1j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🌸 Breathe. Stretch. Find peace.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <Feather name="heart" size={24} color="black" style={styles.search} onPress={() => {<FontAwesome name="heart" size={24} color="black" style={styles.search}/>}}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>23</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/c1j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>☀️ Calm mind, strong body.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <FontAwesome name="heart" size={24} color="black" style={styles.search}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>3M</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/2j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🕉️ Balance. Focus. Harmony.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <Feather name="heart" size={24} color="black" style={styles.search} onPress={() => {<FontAwesome name="heart" size={24} color="black" style={styles.search}/>}}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>250</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/c2j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🌿 Flow with your breath.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <FontAwesome name="heart" size={24} color="black" style={styles.search}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>215</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/3j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🌼 Peace through movement.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <Feather name="heart" size={24} color="black" style={styles.search} onPress={() => {<FontAwesome name="heart" size={24} color="black" style={styles.search}/>}}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>498</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/c3j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>💫 Inhale strength, exhale stress.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <FontAwesome name="heart" size={24} color="black" style={styles.search}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>2</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/4j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🌙 Move. Meditate. Grow.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <Feather name="heart" size={24} color="black" style={styles.search} onPress={() => {<FontAwesome name="heart" size={24} color="black" style={styles.search}/>}}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>275</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/5j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🔆 Inner peace begins here.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <FontAwesome name="heart" size={24} color="black" style={styles.search}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>852</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/c1j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🌻 Mindful body, peaceful soul.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <Feather name="heart" size={24} color="black" style={styles.search} onPress={() => {<FontAwesome name="heart" size={24} color="black" style={styles.search}/>}}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>280</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
        <View style={styles.CardContainer}>
            <Image source={require('./../../assets/images/6j.png')} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>🍃 Stretch into stillness.</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
              <View style={{display:'flex',flexDirection:'row'}}>
            <Feather name="heart" size={24} color="black" style={styles.search} onPress={() => {<FontAwesome name="heart" size={24} color="black" style={styles.search}/>}}/>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>789</Text></View>
            <Feather name="share" size={24} color="black" style={styles.search}/>
            </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  search:{
        marginHorizontal:'7%',
        alignSelf:'center',
    },
    searchContainer:{
        height:'3%',
        width:'85%',
        marginBottom:'5%',
        backgroundColor:'white',
        marginHorizontal:'7%',
        borderWidth:0.5,
        borderRadius:99,
        borderColor:'gray',
        display:'flex',
        flexDirection:'row',
        alignContent:'center'
    },
    image:{
        height:160,
        width:160,
        borderRadius:15,
        opacity:0.7,
        backgroundColor:'black',
    },
    imageContainer:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CardContainer:{
      width: '47%',
      aspectRatio:0.8,
      backgroundColor:'#f5edfbff',
      borderRadius:28,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:'15%'
    },
    image1:{
        height:'60%',
        width:'100%',
        borderRadius:15,
        marginTop:'-22%'
    },
})