import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import Header from '../../components/Header'
import { FontAwesome } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';
import { openURL } from 'expo-linking';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const Home = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const yesterday1 = new Date(today);
  yesterday1.setDate(today.getDate() - 1);
  const tomorrow1 = new Date(today);
  tomorrow1.setDate(today.getDate() + 1);
  const yesterday2 = new Date(today);
  yesterday2.setDate(today.getDate() - 2);
  const tomorrow2 = new Date(today);
  tomorrow2.setDate(today.getDate() + 2);
  const yesterday3 = new Date(today);
  yesterday3.setDate(today.getDate() - 3);
  const tomorrow3 = new Date(today);
  tomorrow3.setDate(today.getDate() + 3);
  const getDayInfo = (date) => {
    return {
      dateNumber: date.getDate(),          // e.g. 10
      dayName: weekDays[date.getDay()],    // e.g. Mon
    };
  };
  const yesterdayInfo = getDayInfo(yesterday1);
  const todayInfo = getDayInfo(today);
  const tomorrowInfo = getDayInfo(tomorrow1);
  const yesterdayInfo1 = getDayInfo(yesterday2);
  const tomorrowInfo1 = getDayInfo(tomorrow2);
  const yesterdayInfo2 = getDayInfo(yesterday3);
  const tomorrowInfo2 = getDayInfo(tomorrow3);
  
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvert = () => setIsInverted(!isInverted);

  const dynamicStyles = isInverted
    ? styles.inverted
    : styles.normal;
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{flex:1}}>
    <ScrollView contentContainerStyle={{height:'100%',width:'100%',paddingBottom:'20%'}}>
      <Header/>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <View style={styles.intro}>
          <View style={{display:'flex',flexDirection:'column',marginHorizontal:'5%',gap:0}}>
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
      <ScrollView
      horizontal={true} // enables horizontal scrolling
      showsHorizontalScrollIndicator={false} // hides scroll bar
      style={styles.calenderContainer}
      contentContainerStyle={{ paddingRight: 65 }} 
    >
        <View style={styles.calender}>
          <Text style={styles.textcalen1}></Text>
          <Text style={styles.textcalen2}>{yesterdayInfo2.dayName}</Text>
          <Text style={styles.textcalen}>{yesterdayInfo2.dateNumber}</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}>.</Text>
          <Text style={styles.textcalen2}>{yesterdayInfo1.dayName}</Text>
          <Text style={styles.textcalen}>{yesterdayInfo1.dateNumber}</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}></Text>
          <Text style={styles.textcalen2}>{yesterdayInfo.dayName}</Text>
          <Text style={styles.textcalen}>{yesterdayInfo.dateNumber}</Text>
        </View>
        <View style={[styles.calender,styles.inverted]}>
          <Text style={[styles.textcalen1,styles.inverted]}>.</Text>
          <Text style={[styles.textcalen2,styles.inverted]}>{todayInfo.dayName}</Text>
          <Text style={[styles.textcalen,styles.inverted]}>{todayInfo.dateNumber}</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}></Text>
          <Text style={styles.textcalen2}>{tomorrowInfo.dayName}</Text>
          <Text style={styles.textcalen}>{tomorrowInfo.dateNumber}</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}>.</Text>
          <Text style={styles.textcalen2}>{tomorrowInfo1.dayName}</Text>
          <Text style={styles.textcalen}>{tomorrowInfo1.dateNumber}</Text>
        </View>
        <View style={styles.calender}>
          <Text style={styles.textcalen1}>.</Text>
          <Text style={styles.textcalen2}>{tomorrowInfo2.dayName}</Text>
          <Text style={styles.textcalen}>{tomorrowInfo2.dateNumber}</Text>
        </View>
      </ScrollView>
      <View style={{height:height*0.4}}>
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
        <TouchableOpacity onPress={() => openURL('https://instagram.com')} style={styles.touchable}>
          <FontAwesome name="instagram" size={24} color="black" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('https://youtube.com')} style={styles.touchable}>
          <FontAwesome name="youtube-play" size={22} color="black" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL('https://x.com')} style={styles.touchable}>
          <FontAwesome name="twitter" size={22} color="black" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home

const styles = StyleSheet.create({
  intro:{
    // height:'55%',
    // width:'92%',
    width: width * 0.9,
    height: height * 0.25,
    backgroundColor:'#a78dfcff',
    borderRadius:'10%',
    display:'flex',
    flexDirection:'row',
    marginTop: 80,
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
      height:'120%',
      width:'50%',
      borderRadius:50,
      top:'-15%'
  },
  calender:{
    height:height * 0.11,
    width:width * 0.15,
    backgroundColor:'white',
    padding:10,
    borderRadius:25,
    borderWidth:0.5,
    borderColor:'gray',
    overflow:'hidden',
    marginHorizontal:'1%'
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
    marginTop: 10
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
    gap:10
  },
  containerImage:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15,
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
// import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
// import Header from '../../components/Header';
// import { FontAwesome } from '@expo/vector-icons';
// import { openURL } from 'expo-linking';

// const { height, width } = Dimensions.get('window');

// const Home = () => {
//   const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const today = new Date();

//   const getDayInfo = (offset) => {
//     const date = new Date(today);
//     date.setDate(today.getDate() + offset);
//     return {
//       dateNumber: date.getDate(),
//       dayName: weekDays[date.getDay()],
//     };
//   };

//   const days = [
//     getDayInfo(-3),
//     getDayInfo(-2),
//     getDayInfo(-1),
//     getDayInfo(0),
//     getDayInfo(1),
//     getDayInfo(2),
//     getDayInfo(3),
//   ];

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//         <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
//           <Header/>

//           {/* Daily Challenge Box */}
//           <View style={styles.center}>
//             <View style={styles.intro}>
//               <View style={styles.introTextContainer}>
//                 <Text style={styles.title}>Daily</Text>
//                 <Text style={styles.title}>Challenge</Text>
//                 <Text style={styles.subtitle}>Do your plan before 09:00 AM</Text>

//                 <View style={styles.avatarRow}>
//                   <Image source={require('./../../assets/images/i4j.png')} style={styles.image} />
//                   <Image source={require('./../../assets/images/i4.png')} style={styles.imageOverlap} />
//                   <Image source={require('./../../assets/images/i4j.png')} style={styles.imageOverlap} />
//                   <Image source={require('./../../assets/images/i4.png')} style={styles.imageOverlap} />
//                 </View>
//               </View>

//               <Image
//                 source={require('./../../assets/images/logo1j.png')}
//                 style={styles.sideImage}
//                 resizeMode="contain"
//               />
//             </View>
//           </View>

//           {/* Calendar Section */}
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={styles.calendarScroll}
//             contentContainerStyle={{ paddingHorizontal: 20 }}
//           >
//             {days.map((d, i) => (
//               <View
//                 key={i}
//                 style={[
//                   styles.calendarCard,
//                   i === 3 && styles.activeCalendar, // today
//                 ]}
//               >
//                 <Text style={[styles.dayName, i === 3 && styles.activeText]}>{d.dayName}</Text>
//                 <Text style={[styles.dayNumber, i === 3 && styles.activeText]}>{d.dateNumber}</Text>
//               </View>
//             ))}
//           </ScrollView>

//           {/* Your Plan Section */}
//           <View>
//             <Text style={styles.planTitle}>Your Plan</Text>

//             <View style={styles.planContainer}>
//               {/* Card 1 */}
//               <View style={[styles.planCard, styles.item1]}>
//                 <Text style={styles.levelTag}>Medium</Text>
//                 <View>
//                   <Text style={styles.planHeading}>Yoga Group</Text>
//                   <Text>25 Nov.</Text>
//                   <Text>14:00 - 15:00</Text>
//                   <Text>A5 room</Text>
//                 </View>
//                 <View style={styles.trainerRow}>
//                   <Image
//                     source={require('./../../assets/images/i4.png')}
//                     style={styles.trainerImage}
//                   />
//                   <View>
//                     <Text style={{ fontFamily: 's', fontSize: 12 }}>Trainer</Text>
//                     <Text style={{ fontFamily: 's-bolditalic', fontSize: 14 }}>Tiffany Way</Text>
//                   </View>
//                 </View>
//               </View>

//               {/* Card 2 */}
//               <View style={[styles.planCard, styles.item2]}>
//                 <Text style={styles.levelTagSmall}>Light</Text>
//                 <View>
//                   <Text style={[styles.planHeading, { marginTop: 10 }]}>Balance</Text>
//                   <Text>28 Nov.</Text>
//                   <Text>18:00 - 19:30</Text>
//                   <Text>A2 room</Text>
//                 </View>
//               </View>

//               {/* Social Card */}
//               <View style={[styles.planCard, styles.item3]}>
//                 <TouchableOpacity onPress={() => openURL('https://instagram.com')}>
//                   <FontAwesome name="instagram" size={24} color="black" style={styles.icon} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => openURL('https://youtube.com')}>
//                   <FontAwesome name="youtube-play" size={22} color="black" style={styles.icon} />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => openURL('https://x.com')}>
//                   <FontAwesome name="twitter" size={22} color="black" style={styles.icon} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   intro: {
//     width: width * 0.92,
//     height: height * 0.28,
//     backgroundColor: '#a78dfcff',
//     borderRadius: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: 10,
//   },
//   introTextContainer: {
//     flex: 1,
//   },
//   title: {
//     fontFamily: 's-bold',
//     fontSize: 32,
//     lineHeight: 36,
//     color: '#fff',
//   },
//   subtitle: {
//     fontFamily: 's',
//     fontSize: 14,
//     color: '#f9f9f9',
//     marginTop: 5,
//   },
//   avatarRow: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   image: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//   },
//   imageOverlap: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     marginLeft: -10,
//   },
//   sideImage: {
//     height: height * 0.25,
//     width: width * 0.35,
//   },
//   calendarScroll: {
//     marginTop: 25,
//   },
//   calendarCard: {
//     width: 65,
//     height: height * 0.6,
//     borderRadius: 20,
//     borderWidth: 0.6,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     marginHorizontal: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeCalendar: {
//     backgroundColor: '#000',
//   },
//   dayName: {
//     fontFamily: 's-medium',
//     fontSize: 12,
//     color: 'gray',
//   },
//   dayNumber: {
//     fontFamily: 's-bold',
//     fontSize: 20,
//     color: 'black',
//   },
//   activeText: {
//     color: '#fff',
//   },
//   planTitle: {
//     fontFamily: 's-bolditalic',
//     fontSize: 26,
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   planContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//   },
//   planCard: {
//     borderRadius: 15,
//     marginBottom: 15,
//     padding: 15,
//   },
//   item1: {
//     backgroundColor: '#fab906ff',
//     width: '47%',
//   },
//   item2: {
//     backgroundColor: '#81c6fbff',
//     width: '47%',
//   },
//   item3: {
//     backgroundColor: '#e2aaf9ff',
//     width: '47%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   planHeading: {
//     fontFamily: 's-bold',
//     fontSize: 18,
//   },
//   levelTag: {
//     backgroundColor: '#ffffff7c',
//     borderRadius: 15,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     alignSelf: 'flex-start',
//     marginBottom: 10,
//   },
//   levelTagSmall: {
//     backgroundColor: '#ffffff7c',
//     borderRadius: 15,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     alignSelf: 'flex-start',
//     marginBottom: 8,
//   },
//   trainerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     gap: 10,
//   },
//   trainerImage: {
//     height: 35,
//     width: 35,
//     borderRadius: 20,
//   },
//   icon: {
//     backgroundColor: 'white',
//     padding: 8,
//     borderRadius: 99,
//     borderWidth: 0.5,
//   },
// });