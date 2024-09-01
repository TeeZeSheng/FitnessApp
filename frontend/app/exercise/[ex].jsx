import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import Exercise from './exercise';
import apiClient from '../component/axiosInstance';
import { Feather } from '@expo/vector-icons';
import { useGlobalContext } from '../context/GlobalProvider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Page = () => {
    const { ex } = useLocalSearchParams();
    const { loading, isLogged, token, user } = useGlobalContext();
    // console.log(ex);
    // const exercise = [{id: 0, ex: 'biceps', reps: 10}, {id: 1, ex: 'biceps', reps: 10}, {id: 2, ex: 'biceps', reps: 10}]
    const name = "shreded";
    const [exercise, setExercise] = useState([]);
    

    const saveWorkout = () => {
      apiClient.get(`workouts/save/${ex}`, {
        headers: { 'Authorization': `Bearer ${token}`}
      }).then((res) => {
        console.log(res.data)
      }).catch(function(error) {
        console.log(error)
      })
    }

    useEffect(() => { 
      apiClient.get(`workouts/${ex}`).then(function (response) {
        console.log(response.data.data.workout)
        let res = response.data.data.workout;
        // workoutName = res.map( w => {
        //   return w.name
        // })
        setExercise(res);
      }).catch(function(error) {
        console.log(error)
      })
    }, [])

    const sendProgress = () => {
      apiClient.post('users/updateProgress', {name: ex, user: user._id }, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }

  return (
    <View className='bg-primary h-full'>
      <Stack.Screen options={{
        headerTitle: exercise.name
        
      }} /> 
      <View>
        <Image source={require('../images/pushup.jpg')} style={{ width: "100%", height: 150}}/>
        <View style={styles.bottom_left}>
          <Text  className="text-xl">{exercise.name}</Text>
          
        </View>
        
      </View>
      <View className="flex flex-row px-2 my-2 justify-between">
        <Text className='text-white text-2xl'>3 Sets</Text>
        <TouchableOpacity className="border-2 border-sky-500 px-4" onPress={saveWorkout}>
          <View className="flex flex-row content-center">
            <Text className="text-white text-xl">Save</Text>
            <Feather className="" name="bookmark" size={24} color="white" />
          </View>
        </TouchableOpacity>
        
        
      </View>
      <View>
        <FlatList 
        data={exercise.exercise}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <Exercise exercise={item}/>
        )}
        />
        <View style={styles.complete}>
        <TouchableOpacity  className="border-2 border-green-200 w-1/3 rounded-md" onPress={sendProgress}>
          <Text className="text-white text-center">Complete</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  bottom_left: {
    bottom: 10,
    position: 'absolute',
    left: 2,
    flexDirection: 'row',
    
  },
  complete:{
    alignItems: 'center',
    justifyContent: 'center',
    
    
  }
})