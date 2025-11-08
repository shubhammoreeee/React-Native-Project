import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg';
import Colors from '@/services/Colors';
import {Ionicons } from '@expo/vector-icons';
import {Entypo } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { LineChart } from "react-native-chart-kit";
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'

const Analytics = ({ percentage = 30 }) => {
  const screenWidth = Dimensions.get("window").width;
  const [checked, setChecked] = useState({
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false,
  });
  const toggle = (name) => {
  setChecked(checked => ({ ...checked, [name]: !checked[name] }));
};
  const radius = 100;
  const strokeWidth = 15;
  const center = radius + strokeWidth;
  const circumference = Math.PI * radius;

  const progressLength = (percentage / 100) * circumference;

  const d = `
    M ${center - radius}, ${center}
    A ${radius},${radius} 0 0 1 ${center + radius},${center}
  `;

  return (
    <GestureHandlerRootView>
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}>
      <Text style={{fontFamily:'s-bold',fontSize:24,marginLeft:'7%'}}>View Insights</Text>
      <View style={styles.container}>
      <Svg height={center + strokeWidth} width={center * 2}>
        <Path
          d={d}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Path
          d={d}
          stroke='#9eef9dff'
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressLength}, ${circumference}`}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <Text style={styles.text}>{percentage}%</Text>
      <Text style={styles.text1}>Gaol reached</Text>
      <Text style={styles.text2}>2/6 Days Completed</Text>
    </View>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:4,marginTop:'5%'}}>
        <View style={{height:35,width:35,borderRadius:8,backgroundColor:'#c6e4efff',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="alarm-outline" size={24} color="#32baecff" style={{}}/>
        </View>
        <Text style={{color:'gray',fontFamily:'s-regular'}}><Text style={{fontFamily:'s-bolditalic',fontSize:18,color:'black'}}>32 </Text>min</Text>
        <Text style={{color:'gray',fontFamily:'s-regular',fontSize:12}}>TIME</Text>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:4,marginTop:'5%'}}>
        <View style={{height:35,width:35,borderRadius:8,backgroundColor:'#00000025',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="flame-outline" size={24} color="#0000006e" style={{}}/>
        </View>
        <Text style={{color:'gray',fontFamily:'s-regular'}}><Text style={{fontFamily:'s-bolditalic',fontSize:18,color:'black'}}>72 </Text>Kcal</Text>
        <Text style={{color:'gray',fontFamily:'s-regular',fontSize:12}}>BURN</Text>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:4,marginTop:'5%'}}>
        <View style={{height:35,width:35,borderRadius:8,backgroundColor:'#f7ccccff',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Entypo name="bar-graph" size={24} color="#ff7c7cff" style={{}}/>
        </View>
        <Text style={{color:'gray',fontFamily:'s-regular'}}><Text style={{fontFamily:'s-bolditalic',fontSize:18,color:'black'}}>1 </Text>Beginner</Text>
        <Text style={{color:'gray',fontFamily:'s-regular',fontSize:12}}>LEVEL</Text>
      </View>
    </View>
    <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row', marginHorizontal:'8%',marginTop:'10%'}}>
      <Text style={{fontFamily:'s-bold',fontSize:20}}>Longest Streaks</Text>
      <Text style={{fontFamily:'s-regular',color:'gray',fontSize:16}}>Days : 2</Text>
    </View>
    <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',backgroundColor:'#fce9b3ff',marginTop:'5%',width:'90%',margin:'auto',borderRadius:20}}>
      <CheckBox
        title="Day : 1"
        checked={checked.day1}
        onPress={() => toggle('day1')}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0,borderRadius:15}}
        checkedColor="#fd4c4cff"
      />
      <CheckBox
        title="Day : 2"
        checked={checked.day2}
        onPress={() => toggle('day2')}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0,borderRadius:15}}
        checkedColor="#fd4c4cff"
      />
      <CheckBox
        title="Day : 3"
        checked={checked.day3}
        onPress={() => toggle('day3')}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0,borderRadius:15}}
        checkedColor="#fd4c4cff"
      />
      <CheckBox
        title="Day : 4"
        checked={checked.day4}
        onPress={() => toggle('day4')}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0,borderRadius:15}}
        checkedColor="#fd4c4cff"
      />
      <CheckBox
        title="Day : 5"
        checked={checked.day5}
        onPress={() => toggle('day5')}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0,borderRadius:15}}
        checkedColor="#fd4c4cff"
      />
      <CheckBox
        title="Day : 6"
        checked={checked.day6}
        onPress={() => toggle('day6')}
        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0,borderRadius:15}}
        checkedColor="#fd4c4cff"
      />
    </View>
    <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row', marginHorizontal:'8%',marginTop:'10%'}}>
      <Text style={{fontFamily:'s-bold',fontSize:20}}>Workout Stat</Text>
    </View>
    <View>
      <LineChart
        data={{
          labels: ["","Day : 1", "Day : 2"],
          datasets: [
            {
              data: [0, 100, 50],
              color: (opacity = 1) => `#a78dfcff`, // line color
              strokeWidth: 0, // optional
            },
          ],
        }}
        width={screenWidth - 50}
        height={250}
        fromZero={true}
        segments={2}
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        yAxisLabel=""
        yAxisSuffix=" Kcal"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `#ffffff`,
          labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          propsForBackgroundLines: {
            strokeDasharray: "", // removes dashed lines
          },
          propsForLabels: {
            fontFamily: "s-bold",
          },
        }}
        bezier // 👈 This makes it CURVED like a mountain
        style={{
          marginVertical: 10,
          marginHorizontal: 5,
          borderRadius: 16,
          alignSelf:'center'
        }}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Analytics

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    height:'20%',
    width:'85%',
    backgroundColor:Colors.White,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
    alignSelf:'center',
  },
  text: {
    position: 'absolute',
    bottom: '30%',
    fontSize: 28,
    fontFamily: 's-bolditalic',
  },
  text1: {
    position: 'absolute',
    bottom: '20%',
    fontSize: 14,
  },
  text2: {
    position: 'absolute',
    bottom: '8%',
    fontSize: 10,
    color:Colors.Gray
  },
})