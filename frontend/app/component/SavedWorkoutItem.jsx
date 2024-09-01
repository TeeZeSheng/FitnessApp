import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Link } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import apiClient from './axiosInstance';
import { useGlobalContext } from '../context/GlobalProvider';


const SavedWorkoutItem = ({workout, deleteWorkout, setDeleteWorkout}) => {
  const {token} = useGlobalContext();
  const creatAlert = () => {
    Alert.alert('Delete Workout', 'Are you sure you want to delete this workout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('canceled'),
        style: 'cancel'
      },
      {
        text: 'ok',
        onPress: () => {
          apiClient.delete(`workouts/${workout._id}`, { headers: {
            'Authorization': 'Bearer ' + token
          }}).then((res) => {
            setDeleteWorkout(!deleteWorkout)
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    ])
  }
  return (
    <View className='px-2 flex flex-row'>
        
        <View className='h-20 w-full border border-slate-600 rounded-md my-2 px-2 py-4 flex flex-row justify-between items-center'>
          <View>
            <Link href={{ pathname: '/exercise/[ex]', params: {ex: workout._id}}} className='w-full'>
                <Text className='text-white text-2xl'>{workout.name}</Text>
                
            </Link>
            <Text className='text-white text-l'>{workout.type} reps</Text>
          </View>
          <TouchableOpacity onPress={creatAlert}>
            <MaterialIcons name="delete" size={24} color="white" className="my-2" />
          </TouchableOpacity>
          
        </View>
        
        
        
        
    </View>
    
  )
}

export default SavedWorkoutItem

const styles = StyleSheet.create({
    workout: {
        width: wp(90),

    },
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
})