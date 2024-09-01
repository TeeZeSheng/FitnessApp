import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import MealList from './MealList'
import { Link } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useGlobalContext } from '../context/GlobalProvider';
import apiClient from './axiosInstance';
import Entypo from '@expo/vector-icons/Entypo';
import { Alert } from 'react-native';

const CurrentMeal = () => {
    const {user, token} = useGlobalContext();
    const [currentMeal, setCurrentMeal] = useState([]);
    const [deleteMeal, setDeleteMeal] = useState(false)
    console.log(user.mealPlan)

    const creatAlert = () => {
      Alert.alert('Delete Meal Plan', 'Are you sure you want to delete this meal plan?', [
        {
          text: 'Cancel',
          onPress: () => console.log('canceled'),
          style: 'cancel'
        },
        {
          text: 'ok',
          onPress: () => {
            apiClient.delete(`meal/${currentMeal._id}`, { headers: {
              'Authorization': 'Bearer ' + token
            }}).then((res) => {
              setDeleteMeal(!deleteMeal)
            }).catch((err) => {
              console.log(err)
            })
          }
        }
      ])
    }

    useEffect(() => {
      apiClient.get('/meal/getUserMealPlan', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then((res) => {
        console.log(res.data.data.mealPlan.mealPlan[0])
        setCurrentMeal(res.data.data.mealPlan.mealPlan[0])
      }).catch((err) => {
        console.log(err)
      })
    }, [user, deleteMeal])

    const meal = [{mealType: 'breakfast', food: 'salmon', id: 0}, {mealType: 'lunch', food: 'salmon', id: 1}, {mealType: 'dinner', food: 'salmon', id: 2}, ]
  return (
    <View style={styles.container}>
      {currentMeal ?
      <View className="flex-row h-1/2"> 
        <View style={styles.img} className='rounded-l-lg'>  
        <Image source={require('../images/mealplan.png')} style={{ width: "100%", height: "100%", borderBottomLeftRadius: 8, borderTopLeftRadius: 8,}}/>
      </View>
      <View style={styles.mealName} className='rounded-r-lg'>
        <Text className='text-white mx-2'>{currentMeal.name}</Text>
        <Link className='text-white mx-2' href={{ pathname: '/meal/[meal]', params: {meal: currentMeal._id}}}>Go to meal</Link>
        <Entypo name="cross" size={24} color="black" style={styles.topright} onPress={creatAlert}/>
      </View>
      </View> : <View style={styles.noMeal} >
        <Text className="text-white my-2">No Meal Plan</Text>
        {/* <TouchableOpacity className="border-2 border-sky-500 px-4 rounded-lg">
          <Text className="text-white">Follow a meal plan now</Text>
        </TouchableOpacity> */}
        </View>}
      
    </View>
  //   <FlatList 
  //   data={meal}
  //   keyExtractor={(item) => item.id} 
  //   horizontal
  //   renderItem={({ item }) => (
  //       <MealList meal={item}/>2
       
  // )}/>
  
  )
}

export default CurrentMeal

const styles = StyleSheet.create({
  container: {
   height: hp(40),
    
    
    
  },
  img: {
    flex: 1,
    // height: hp(30)
  },
  mealName: {
    flex: 2,
    backgroundColor: 'gray',
    justifyContent:  'center',
    // height: hp(30)
    
  },
  noMeal: {
    
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly'
    
  },
  topright: {
    position: 'absolute',
    top: 8,
    right: 16,
  }
})