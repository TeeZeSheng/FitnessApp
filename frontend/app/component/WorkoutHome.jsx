import { View, Text, FlatList,StyleSheet, TouchableHighlight, Button } from 'react-native'
import {React, useState, useEffect, useCallback} from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../component/FormField';
import icons from '../../constant/icons';
import WorkoutList from '../component/WorkoutList';
import WorkoutSpolight from '../component/WorkoutSpolight';
import ExploreWorkout from '../component/ExploreWorkout';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllWorkout from '../component/AllWorkout';
import { Link } from 'expo-router';
import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { usePathname } from "expo-router";
import { Image } from 'expo-image';


const WorkoutHome = () => {

  // let workout = [];
  let workoutName = [{name: 'avc', title: "Workout that trains your abs", id: 0}, {name: 'abc', title: "Workout that trains your abs", id: 1}, {name: 'abc', title: "Workout that trains your abs", id: 2}];
  const [workout, setWorkout] = useState([]);
  const n = "hi"; 
  const path = usePathname();
  console.log(path)
  
  useFocusEffect(
    useCallback(() => { 
      if (path === '/workout') {
        axios.get('http://localhost:3000/api/v1/workouts/all').then(function (response) {
          console.log('response.data.data.workout')
          let res = response.data.data.workout;
          // workoutName = res.map( w => {
          //   return w.name
          // })
          setWorkout(res);
        }).catch(function(error) {
          console.log(error)
        })
      }
      
    }, [path])
  )

  const renderWorkout = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView className="bg-primary h-full px-2">
      <Text className="text-white text-2xl">Workout Library</Text>
      <View className="flex flex-row space-x-4">
      {/* <Link href={"/customWorkout"}>
        <View className="space-y-2">
          
          <View className="w-[180px] h-[100px]">
            <Image src={'https://www.giantfreakinrobot.com/wp-content/uploads/2024/03/timothee-chalamet-dune-part-two-900x506.jpg'} style={{ width: "100%", height: "100%"}}/>
          </View >
          <Text className="text-white">Custom Workout</Text>

          
        </View>
        </Link> */}
        <View className="space-y-2">
          <Link href={"/savedWorkout"}>
          <Image source={require('../images/pushup.jpg')} style={{width: 180, height: 100}}/>
            
          </Link>
         

          <Text className="text-white">Saved Workout</Text>
        </View>
      </View>
      <View className="my-4">
        <Text className="text-white text-2xl">Workout Spotlight</Text>
        
        <WorkoutSpolight />
      </View>
      <Text className="text-white text-2xl">Workouts</Text>
      <ExploreWorkout workoutName={workout}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    paddingHorizontal: 10,

  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  }
})

export default WorkoutHome
