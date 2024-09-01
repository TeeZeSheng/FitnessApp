import { FlatList, StyleSheet, Text, View } from 'react-native'
import {React, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import apiClient from './component/axiosInstance'
import { useGlobalContext } from './context/GlobalProvider'
import { Link } from 'expo-router'
import { BlurView } from 'expo-blur';

import SavedWorkoutItem from './component/SavedWorkoutItem'

const SavedWorkout = () => {
    const {token, loading} = useGlobalContext();
    console.log(token)
    const [workout, setWorkout] = useState([]);
    const [deleteWorkout, setDeleteWorkout] = useState(false);
    useEffect(() => {
        apiClient.get('workouts/viewWorkout', {headers:{'Authorization': 'Bearer ' + token}}).then((res) => {
            console.log(res.data.data.workout)
            setWorkout(res.data.data.workout)
            console.log(`delete ${deleteWorkout}`)
        }).catch((err) => {
            console.log(err)
        })
    }, [deleteWorkout])
  return (
    <View className="bg-primary h-full">
        <Stack.Screen options={{
            headerTitle: "Saved Workouts"
        }}/>
        {workout.length === 0 ? <View><Text className="text-white">No workouts</Text></View> : <></>}
        <FlatList 
        contentContainerStyle="items-center"
        data={workout}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
            
            <SavedWorkoutItem workout={item} deleteWorkout={deleteWorkout} setDeleteWorkout={setDeleteWorkout}/>
                
                   
            
        )}
        />

        
    </View>
  )
}

export default SavedWorkout

const styles = StyleSheet.create({
    workout: {
        // width: wp(80),

    },
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }
})