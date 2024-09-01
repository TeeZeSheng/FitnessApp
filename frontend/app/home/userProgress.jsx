import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useGlobalContext } from '../context/GlobalProvider';
import { usePathname } from 'expo-router';
import apiClient from '../component/axiosInstance';
import AntDesign from '@expo/vector-icons/AntDesign';

const UserProgress = () => {
  const lst = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const {user, token} = useGlobalContext();
  const [meal, setMeal] = useState([]);

  const [activity, setActivity] = useState([]);
    const path = usePathname();
    useEffect(() => {
        apiClient.get(`users/getProgress/${user._id}`, {headers: {
            'Authorization': 'Bearer ' + token
        }}).then((res) => {
            console.log(res.data.data.progress.date)
            setActivity(res.data.data.progress)
        }).catch((err) => {
            console.log(err)
        })
    }, [path])

    useEffect(() => {
      apiClient.get('/meal/getMealPlan').then((res) => {
        console.log(res.data.data.mealPlan[0].meal[0].name)
        setMeal(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }, [])
  
  console.log(user)
  return (
    <View style={styles.progress} className="space-x-4">
      <View style={{
          backgroundColor: "rgb(31 41 55)",
          height: "",
          borderRadius: 10,
          flex: 1
          
          
      }} >
      <View style={styles.workout}>
        {activity.length === 0 ? <View><Text>Not complete</Text>
          <Button title='Start Now' className="border-md border"/></View> : 
          <View style={styles.workout}>
            <AntDesign name="checkcircle" size={24} color="green" />
            <Text className="mt-2 text-gray-100">Completed {activity[0].workoutItems.name}</Text>
          </View>}
        
        
      </View>
      
      
      
    </View> 
    <View style={{
          backgroundColor: "rgb(31 41 55)",
          height: hp(18),
          borderRadius: 10,
          flex: 1
          
          
      }} >
      
      <View style={styles.meal}>
        {meal.length === 0 ? <View>
          <Text className="mt-2 text-gray-100">No meal plan selected</Text>
        </View> : <View>
          <Text className="mt-2 text-gray-100">Next Meal: </Text>
          </View>}
        
      </View>
      
      
    </View>
    </View>
  )
}

export default UserProgress

const styles = StyleSheet.create({
  progress:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 3,
    marginBottom: 100,
    // height: hp(20)

  },
  progressIcon: {
    flex: 1,
    flexDirection: 'row',
    margin: 'auto',
    padding: 'auto'

  },
  workout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  meal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})