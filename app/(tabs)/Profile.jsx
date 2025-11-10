import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';
import { ClerkProvider, SignedIn, SignedOut, useOAuth } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useUser } from "@clerk/clerk-expo";
import { Share } from "react-native";

const clerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_bWFqb3ItYXNwLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ";

export default function Profile() {
    return (
      <Main1/>
    );
}

const Main1 = () => {
  const onShare = async () => {
        try {
          await Share.share({
            title: "Cool Card!",
            message: "You share your YogaMate account successfully & This is my porfolio link: https://shubham-more-portfolio.netlify.app/",
          });
        } catch (error) {
          console.error(error);
        }
      };
  const { user } = useUser();
      if (!user) return null;
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const { isLoaded, signOut } = useAuth();
      
    const signInWithGoogle = async () => {
      try {
        const { createdSessionId, setActive } = await startOAuthFlow({
          redirectUrl: Linking.createURL("/Home", { scheme: "recipekartai" }),
        });
  
        if (createdSessionId) {
          await setActive?.({ session: createdSessionId });
          alert("✅ Logged in successfully!");
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    };
  
    if (!isLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Loading authentication...</Text>
        </View>
      );
    }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{router.push('/(tabs)/Home')}} style={styles.touchable}>
          <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.search1}/>
        </TouchableOpacity>
        <View style={{display:'flex',alignContent:'center'}}>
          <Text style={styles.text1}>Profile</Text>
        </View>
        <TouchableOpacity onPress={()=>{router.push('/Setting')}} style={styles.searchContainer}>
          <Feather name="settings" size={24} color="black" style={styles.search}/>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:'-10%',}}>
        <View style={{display:'flex',flexDirection:'row',marginBottom:'4%'}}>
          <Image
            source={{ uri: user.imageUrl }}
            style={styles.image}
          />
          <View>
            <Text style={{fontFamily:'s-bold',fontSize:16,}}>{user.fullName}</Text>
            <Text style={{fontFamily:'s-regular',fontSize:16,color:'gray'}}>{user.primaryEmailAddress?.emailAddress}</Text>
          </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginHorizontal:'5%',width:'120%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}>
            <View style={{display:'flex',flexDirection:'column'}}>
            <Text style={{fontFamily:'s-medium',fontSize:18}}>Follow</Text>
            <Text style={{fontFamily:'s-medium',fontSize:18}}>72</Text>
            </View>
            <View style={{display:'flex',flexDirection:'column'}}>
            <Text style={{fontFamily:'s-medium',fontSize:18}}>Followers</Text>
            <Text style={{fontFamily:'s-medium',fontSize:18}}>162</Text>
            </View>
          </View>
          <View style={{display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={onShare} style={styles.searchContainer1}><Feather name="external-link" size={24} color="black" style={styles.search}/></TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.container1}>
          <View style={[styles.gridItem, styles.item1]}>
            <Text style={{fontFamily:'s-regular',fontSize:14}}>Start Weight</Text>
            <Text style={{fontFamily:'s-bolditalic',fontSize:16}}><Text style={{fontFamily:'s-bold',fontSize:20}}>53.3 </Text>kg</Text>
          </View>
          <View style={[styles.gridItem, styles.item2]}>
            <Text style={{fontFamily:'s-regular',fontSize:14}}>Goal</Text>
            <Text style={{fontFamily:'s-bolditalic',fontSize:16}}><Text style={{fontFamily:'s-bold',fontSize:20}}>50 </Text>kg</Text>
          </View>
          <View style={[styles.gridItem, styles.item3]}>
            <Text style={{fontFamily:'s-regular',fontSize:14}}>Daily Calories</Text>
            <Text style={{fontFamily:'s-bolditalic',fontSize:16}}><Text style={{fontFamily:'s-bold',fontSize:20}}>750 </Text>kcal</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop:'-65%',marginHorizontal:'5%',display:'flex'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'3%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'10%'}}><Feather name="activity" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Physical activity</Text>
            <Text>2 days ago</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/(tabs)/Analytics')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'3%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}><Foundation name="graph-horizontal" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Statistics</Text>
            <Text>This year : 109 km's</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/(tabs)/Analytics')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'3%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}><FontAwesome5 name="route" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Routes</Text>
            <Text>7</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/(tabs)/Analytics')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'3%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}><SimpleLineIcons name="trophy" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Best time</Text>
            <Text>Show all</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/(tabs)/Analytics')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.3,borderColor:'lightgray',padding:'3%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'7%'}}><MaterialCommunityIcons name="lightning-bolt-circle" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Equipment</Text>
            <Text>2Nike Pegasus 3000 : 130,4 km</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/(tabs)/Analytics')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:'15',
        marginBottom:'-10%'
    },
    search1:{
        height:'100%',
        width:'100%',
        marginHorizontal:'5%',
        marginTop:'3%'
    },
    image:{
        height:'117%',
        width:'14%',
        marginHorizontal:'5%',
        marginTop:'0%',
        borderRadius:35
    },
    text1:{
        fontFamily:'s-regular',
        fontSize:30,
        textAlign:'center'
    },
    search:{
        marginHorizontal:'13%',
        padding:4,
    },
    searchContainer:{
        height:'30%',
        width:'11%',
        backgroundColor:'white',
        marginHorizontal:'7%',
        borderWidth:0.5,
        borderRadius:99,
        borderColor:'gray',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
    },
    searchContainer1:{
        height:'45%',
        width:'25%',
        backgroundColor:'white',
        paddingLeft:'-5%',
        borderWidth:0.5,
        borderRadius:99,
        borderColor:'gray',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        marginRight:'15%'
    },
    container1: {
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    gap:'0%',
    height:'48%',
    width:'80%',
    marginTop:'-30%',
  },
  gridItem: {
    paddingLeft:'3%',
    justifyContent: 'center',
    borderRadius: 20,
  },
  item1: {
    backgroundColor: '#9eef9dff',
    height:'65%',
    width:'32%',
    marginLeft:'5%'
  },
  item2: {
    backgroundColor: '#a1dbf0ff',
    height:'65%',
    width:'23%',
  },
  item3: {
    backgroundColor: '#fab906ff',
    height:'65%',
    width:'35%',
  },
  touchable:{
        height:'18%',
        width:'5%',
        marginHorizontal:'5%',
        marginTop:'2%'
    }
})