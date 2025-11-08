import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
    return (
        <Tabs screenOptions={{headerShown:false,
            tabBarStyle: {position:'absolute',
                bottom:'2%',
                marginHorizontal:'10%',
                backgroundColor:'black',
                borderRadius:50,
                height:'7%',
                width:'80%'},
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'gray',
        }}
        >
            <Tabs.Screen name='Home'
                options={{
                    tabBarIcon: ({focused,color,size}) => 
                        <Image
                            source={require('./../../assets/images/i1.png')}
                            style={{width:size,height:size,opacity:focused?1:0.5,}}
                        />,
                }}
            />
            <Tabs.Screen name='Explore'
                options={{
                    tabBarIcon: ({focused,color,size}) => 
                        <Image
                            source={require('./../../assets/images/i2.png')}
                            style={{width:size,height:size,opacity:focused?1:0.5}}
                        />
                }}
            />
            <Tabs.Screen name='Analytics'
                options={{
                    tabBarIcon: ({focused,color,size}) => 
                        <Image
                            source={require('./../../assets/images/i3.png')}
                            style={{width:size,height:size,opacity:focused?1:0.5}}
                        />
                }}
            />
            <Tabs.Screen name='Profile'
                options={{
                    tabBarIcon: ({focused,color,size}) => 
                        <Image
                            source={require('./../../assets/images/i4.png')}
                            style={{width:size,height:size,opacity:focused?1:0.5}}
                        />
                }}
            />
        </Tabs>
    )
}

export default TabLayout

const styles = StyleSheet.create({
    TabBar:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        backgroundColor:'red'
    }
})