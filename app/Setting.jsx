import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
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
        <TouchableOpacity onPress={()=>{router.push('/(tabs)/Profile')}} style={styles.touchable}>
          <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.search1}/>
        </TouchableOpacity>
        <View style={{display:'flex',alignContent:'center'}}>
          <Text style={styles.text1}>Setting</Text>
        </View>
      </View>
      <View style={{marginTop:'-20%',marginBottom:'5%'}}>
        <View style={{display:'flex',flexDirection:'row',marginBottom:'4%'}}>
          <Image
            source={{ uri: user.imageUrl }}
            style={styles.image}
          />
          <View>
            <Text style={{fontFamily:'s-bold',fontSize:16,}}>{user.fullName}</Text>
            <Text style={{fontFamily:'s-regular',fontSize:12,color:'gray',width:'80%'}}>Security & privacy, app management,Help & feedback</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop:'0%',marginHorizontal:'3%',display:'flex'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'10%'}}><MaterialIcons name="manage-accounts" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Account</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}><Ionicons name="notifications" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Notification</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}><MaterialIcons name="privacy-tip" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Privacy</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.2,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'12%'}}><MaterialIcons name="question-answer" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>FAQ</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.3,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'7%'}}><FontAwesome name="pie-chart" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Statistics</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.3,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'7%'}}><Ionicons name="language" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Language</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.3,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'7%'}}><MaterialIcons name="star-rate" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>Rate Us</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.3,borderColor:'lightgray',padding:'5%'}}>
          <View style={{display:'flex',flexDirection:'row',gap:'7%'}}><Entypo name="info-with-circle" size={24} color="black"/>
          <View>
            <Text style={{fontFamily:'s-bold'}}>About</Text>
          </View></View>
          <TouchableOpacity onPress={()=>{router.push('/SettingApp')}}><Ionicons name="chevron-forward-outline" size={24} color="black"/></TouchableOpacity>
        </View>
      </View>
      <View style={{height:'10%'}}>
          <SignedIn>    
          <TouchableOpacity onPress={() => (signOut?.(),router.push('/Landing'))} style={{width:'50%',height:'1000%',display:'flex',alignItems:'center',marginHorizontal:'25%',marginTop:'3%'}}>
            <View  style={styles.buttonContainer}>
              <Text style={styles.button}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </SignedIn>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
          width:'80%',
          height:'5%',
          borderRadius:25,
          backgroundColor:'black',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          margin:'3%',
          paddingBottom:'2%'
      },
      button:{
          fontSize:20,
          fontFamily:'s',
          color:'white',
      },
  container:{
        display:'flex',
        flexDirection:'row',
        marginVertical:'15',
        gap:25
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