import { Image,ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {Marquee} from '@animatereactnative/marquee'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Colors from '@/services/Colors';
import { Redirect, router } from 'expo-router';
import { ClerkProvider, SignedIn, SignedOut, useOAuth } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { AntDesign } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const clerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_bWFqb3ItYXNwLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ";
export default function Landing() {
    return (
        <Main/>
    );
}

const Main = () => {
    const imageList = [
        require('./../assets/images/1j.png'),
        require('./../assets/images/c1j.png'),
        require('./../assets/images/2j.png'),
        require('./../assets/images/c2j.png'),
        require('./../assets/images/3j.png'),
        require('./../assets/images/6j.png'),
        require('./../assets/images/4j.png'),
        require('./../assets/images/c3j.png'),
        require('./../assets/images/5j.png'),
    ]
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const { isLoaded, signOut } = useAuth();
    
    const signInWithGoogle = async () => {
        try {
        const { createdSessionId, setActive } = await startOAuthFlow({
            redirectUrl: Linking.createURL("/Home", { scheme: "recipekartai" }),
        });

        if (createdSessionId) {
            await setActive?.({ session: createdSessionId });
            // alert("✅ Logged in successfully!");
        }
        }catch (err) {
        console.error("OAuth error", err);
        }
    };

    if (!isLoaded) {
        return (
            <View style={styles.container12}>
      <ActivityIndicator size="large" color={Colors.Primary} />
      <Text style={styles.text12}>Please wait...</Text>
    </View>
        );
    }
    return (
        <GestureHandlerRootView>
        <SafeAreaView>
            <Marquee 
                spacing={10}
                speed={1}
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
                speed={0.2}
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
                speed={1.5}
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
                <Text style={{fontFamily:'s-bolditalic',fontSize:20,marginTop:10,margin:'3%',textAlign:'center'}}>SoulStretch 💫🧘 | Find Balance, Build Strength & Awaken Calm!</Text>
                <Text style={{fontFamily:'s',fontSize:15,margin:'1%',textAlign:'center',marginBottom:'2%'}}>Balance your mind, strengthen your body, and follow your progress. 🌼✨</Text>
                <SignedOut>
                <TouchableOpacity onPress={signInWithGoogle} style={{width:'100%',height:'100%',display:'flex',alignItems:'center',}}>
                    <View  style={styles.buttonContainer}>
                        <Text style={styles.button}>Get Started With <AntDesign name="google" size={24} color="white" style={styles.search1}/>oogle</Text>
                    </View>
                </TouchableOpacity>
                </SignedOut>
                <SignedIn>
                    <TouchableOpacity onPress={()=>{router.push('/(tabs)/Home')}} style={{width:'100%',height:'100%',display:'flex',alignItems:'center',}}>
                    <View  style={styles.buttonContainer}>
                        <Text style={styles.button}>Let's GOOOOO</Text>
                    </View>
                </TouchableOpacity>
            </SignedIn>
            </View>
        </SafeAreaView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container12: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text12: {
    marginTop: 15,
    fontSize: 16,
    color: 'black',
    fontFamily: 's-bolditalic',
  },
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