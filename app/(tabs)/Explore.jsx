import { StyleSheet, Text, View, Input, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/services/Colors';
import {Marquee} from '@animatereactnative/marquee'
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import { Redirect, router } from 'expo-router';
import { Share } from "react-native";
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const Explore = () => {
  
  const [text, setText] = useState('');
  const cardData = [
  { id:1,image: require('../../assets/images/1j.png'), caption: '🌸 Breathe. Stretch. Find peace.',like:15 },
  { id:2,image: require('../../assets/images/c1j.png'), caption: '☀️ Calm mind, strong body.',like:351 },
  { id:3,image: require('../../assets/images/2j.png'), caption: '🕉️ Balance. Focus. Harmony.',like:565 },
  { id:4,image: require('../../assets/images/c2j.png'), caption: '🌿 Flow with your breath.',like:852 },
  { id:5,image: require('../../assets/images/3j.png'), caption: '🌼 Peace through movement.',like:4498 },
  { id:6,image: require('../../assets/images/c3j.png'), caption: '💫 Inhale strength, exhale stress.',like:987 },
  { id:7,image: require('../../assets/images/4j.png'), caption: '🌙 Move. Meditate. Grow.',like:236 },
  { id:8,image: require('../../assets/images/5j.png'), caption: '🔆 Inner peace begins here.',like:778 },
  { id:9,image: require('../../assets/images/6j.png'), caption: '🌻 Mindful body, peaceful soul.',like:1216 },
  { id:10,image: require('../../assets/images/c1j.png'), caption: '🍃 Stretch into stillness.',like:35 },
];
  const onShare = async () => {
      try {
        await Share.share({
          title: "Cool Card!",
          message: "You share this card successfully & This is my porfolio link: https://shubham-more-portfolio.netlify.app/",
        });
      } catch (error) {
        console.error(error);
      }
    };
  const [likedCards, setLikedCards] = useState([]);
  const [likesCount, setLikesCount] = useState(Object.fromEntries(cardData.map(card => [card.id, card.like])));
  const toggleLike = (id) => {
    setLikedCards((prev) => {
    const alreadyLiked = prev.includes(id);
    setLikesCount((counts) => ({
      ...counts,
      [id]: counts[id] + (alreadyLiked ? -1 : 1),
    }));
    return alreadyLiked
      ? prev.filter((cardId) => cardId !== id)
      : [...prev, id];
  });
  };
  const filteredCards = cardData.filter((card) => {
    const search = text.toLowerCase();
    if (search === "like" || search === "liked") {
      return likedCards.includes(card.id);
    }
    return (
      card.caption.toLowerCase().includes(search)
    );
  });
  const clearSearch = () => {
    setText("");
  };
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
          onFocus={() => setText('')}
        ></TextInput>
        <TouchableOpacity onPress={clearSearch} style={{position:'absolute',top:'25%',right:'2%'}}>
          <MaterialIcons name="cancel" size={24} color="black"/>
        </TouchableOpacity>
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
                <TouchableOpacity onPress={()=>{router.push('/Trainer')}}>
                  <Image key={index} source={image} blurRadius={5} style={styles.image}/>
                  <Text style={{textAlign:'center',marginTop:'-55%',color:Colors.White,fontFamily:'s-regular',fontSize:20}}>{[index === 0 ? 'Meditation' : null,index === 1 ? 'Stretching' : null,index === 2 ? 'Breathing' : null,index === 3 ? 'Balance' : null,index === 4 ? 'Relaxation' : null,index === 5 ? 'Power Yoga' : null,index === 6 ? 'Beginner' : null,index === 7 ? 'Advanced' : null,index === 8 ? 'Night Yoga' : null]}</Text>
                </TouchableOpacity>
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
        {filteredCards.length === 0 ? (
  <Text style={styles.noResult}>No results found</Text>
) : (
  filteredCards.map((item, id) => (
        <View key={id} style={styles.CardContainer}>
          <TouchableOpacity onPress={()=>{router.push('/Trainer')}} style={{height:'100%',width:'100%',marginTop:'40%'}}>
            <Image source={item.image} style={styles.image1}/>
            <Text style={{color:'black',fontFamily:'s-bolditalic',fontSize:16,textAlign:'center'}}>{item.caption}</Text>
            <View style={{display:'flex',justifyContent:'space-between',alignContent:'center',flexDirection:'row',marginTop:'5%'}}>
            <View style={{display:'flex',flexDirection:'row',gap:5}}>
            <TouchableOpacity onPress={() => toggleLike(item.id)}>
                {likedCards.includes(item.id) ? (
                  <FontAwesome name="heart" size={24} color="red" />
                ) : (
                  <Feather name="heart" size={24} color="black" />
                )}
              </TouchableOpacity>
            <Text style={{color:'black',fontFamily:'s-regular',fontSize:18}}>{likesCount[item.id]}</Text></View>
            <TouchableOpacity onPress={onShare} style={styles.search}>
              <Feather name="share" size={24} color="black"/>
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
        </View>
        ))
      )}
      </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Explore

const styles = StyleSheet.create({
  noResult: {
    textAlign: "center",
    marginTop: 40,
    color: "#888",
    fontSize: 16,
  },
  container: {
    paddingBottom: '80%',
  },
  search:{
        marginHorizontal:'7%',
        alignSelf:'center',
    },
    searchContainer:{
        height:55,
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