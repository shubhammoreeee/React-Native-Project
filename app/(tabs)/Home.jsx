import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { FontAwesome } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';

const Home = () => {
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvert = () => setIsInverted(!isInverted);

  const dynamicStyles = isInverted
    ? styles.inverted
    : styles.normal;
  return (
    <SafeAreaView>
      <Header/>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <View style={styles.intro}>
          <View style={{display:'flex',flexDirection:'col',marginHorizontal:'5%',gap:0}}>
            <Text style={{fontFamily:'s-bold',fontSize:38,marginTop:'2%'}}>Daily</Text>
            <Text style={{fontFamily:'s-bold',fontSize:38,marginTop:'-8%'}}>challenge</Text>
            <Text style={{fontFamily:'s',fontSize:14,marginTop:'%'}}>Do your plan before 09:00 Am</Text>
            <View style={{height:'100%',width:'100%',display:'flex',flexDirection:'row'}}>
            <Image
              source={require('./../../assets/images/i4j.png')}
              style={styles.image}
            />
            <Image
              source={require('./../../assets/images/i4.png')}
              style={styles.image2}
            />
            <Image
              source={require('./../../assets/images/i4j.png')}
              style={styles.image3}
            />
            <Image
              source={require('./../../assets/images/i4.png')}
              style={styles.image3}
            />
            </View>
          </View>
            <Image
              source={require('./../../assets/images/logo1j.png')}
              style={styles.image1}
            />
          </View>
      </View>
      <View style={styles.calenderContainer}>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}></Text>
          <Text style={styles.textcalen2}>Sun</Text>
          <Text style={styles.textcalen}>22</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}>.</Text>
          <Text style={styles.textcalen2}>Mon</Text>
          <Text style={styles.textcalen}>23</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}></Text>
          <Text style={styles.textcalen2}>Tue</Text>
          <Text style={styles.textcalen}>24</Text>
        </View>
        <View style={[styles.calender,styles.inverted]}>
          <Text style={[styles.textcalen1,styles.inverted]}>.</Text>
          <Text style={[styles.textcalen2,styles.inverted]}>Wed</Text>
          <Text style={[styles.textcalen,styles.inverted]}>25</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}></Text>
          <Text style={styles.textcalen2}>Thu</Text>
          <Text style={styles.textcalen}>26</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}>.</Text>
          <Text style={styles.textcalen2}>Fri</Text>
          <Text style={styles.textcalen}>27</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}>.</Text>
          <Text style={styles.textcalen2}>Sat</Text>
          <Text style={styles.textcalen}>28</Text>
        </View>
      </View>
      <View>
        <Text style={{margin:'5%',fontFamily:'s-bolditalic',fontSize:28,marginBottom:'-3%'}}>Your Plan</Text>
        <View style={styles.container}>
      <View style={[styles.gridItem, styles.item1]}>
        <Text style={{height:30,width:70,padding:7,paddingTop:3,borderWidth:0.5,borderRadius:15,backgroundColor:'#ffffff7c',position:'absolute',top:15,left:15}}>Medium</Text>
        <View style={{ marginLeft:'-18%'}}>
        <Text style={{fontFamily:'s-bold',fontSize:18}}>Yoga Group</Text>
        <Text>25 Nov.</Text>
        <Text>14:00-15:00</Text>
        <Text>A5 room</Text>
        </View>
        <View style={styles.containerImage}>
        <Image
          source={require('./../../assets/images/i4.png')}
          style={{height:'100%',width:'25%'}}
        />
        <View style={{display:'flex',alignContent:'center'}}>
          <Text style={{fontFamily:'s',fontSize:12}}>Trainer</Text>
          <Text style={{fontFamily:'s-bolditalic',fontSize:14,textAlign:'center'}}>Tiffany Way</Text>
        </View></View>
      </View>
      <View style={[styles.gridItem, styles.item2]}>
        <Text style={{height:30,width:50,padding:7,paddingTop:3,borderWidth:0.5,borderRadius:15,backgroundColor:'#ffffff7c',position:'absolute',top:15,left:15}}>Light</Text>
        <View style={{ marginLeft:'-30%'}}>
        <Text style={{fontFamily:'s-bold',fontSize:18,marginTop:'15%'}}>Balance</Text>
        <Text>28 Nov.</Text>
        <Text>18:00-19:30</Text>
        <Text>A2 room</Text></View>
      </View>
      <View style={[styles.gridItem, styles.item3]}>
        <FontAwesome name="instagram" size={24} color="black" style={styles.icon}/>
        <FontAwesome name="youtube-play" size={22} color="black" style={styles.icon}/>
        <FontAwesome name="twitter" size={22} color="black" style={styles.icon}/>
      </View>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  intro:{
    height:'55%',
    width:'92%',
    backgroundColor:'#a78dfcff',
    borderRadius:'10%',
    display:'flex',
    flexDirection:'row',
    marginTop:'-10%',
  },
  image:{
        height:'20%',
        width:'20%',
        marginTop:'12%',
        borderRadius:35
    },
  image2:{
        height:'20%',
        width:'20%',
        marginTop:'12%',
        marginLeft:'-7%',
        borderRadius:35
    },
  image3:{
        height:'20%',
        width:'20%',
        marginTop:'12%',
        marginLeft:'-7%',
        borderRadius:35
    },
  image1:{
      position:'absolute',
      right:0,
      height:'90%',
      width:'50%',
      borderRadius:50,
      top:'5%'
  },
  calender:{
    height:'100%',
    width:'13%',
    backgroundColor:'white',
    padding:10,
    borderRadius:25,
    borderWidth:0.5,
    borderColor:'gray',
    overflow:'hidden'
  },
  textcalen:{
    textAlign:'center'
  },
  textcalen1:{
    textAlign:'center',
    fontSize:55,
    marginTop:'-140%',
  },
  textcalen2:{
    textAlign:'center',
    fontFamily:'s-medium',
    color:'gray',
    fontSize:12,
  },
  normal: {
    // backgroundColor: '#ffffff',
  },
  inverted: {
    backgroundColor: '#000000',
    color:'white'
  },
  calenderContainer:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    marginHorizontal:15,
    marginTop:'-20%'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  gridItem: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  item1: {
    backgroundColor: '#fab906ff',
    width: '45%',
    height: 240,
    marginLeft:15,
    display:'flex',
    flexDirection:'column',
  },
  item2: {
    backgroundColor: '#81c6fbff',
    width: '45%',
    height: 160,
    marginRight:15,
    display:'flex',
    flexDirection:'column',
  },
  item3: {
    backgroundColor: '#e2aaf9ff',
    width: '45%',
    height: 70,
    position:'absolute',
    right:25,
    bottom:10,
    display:'flex',
    flexDirection:'row',
    gap:20
  },
  containerImage:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:'15',
        marginBottom:'-10%',
        gap:8
    },
    icon:{
      borderWidth:0.5,
      padding:8,
      borderRadius:99,
      backgroundColor:'white'
    }
})