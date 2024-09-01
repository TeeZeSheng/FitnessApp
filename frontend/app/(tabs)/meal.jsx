import { View, Text, Button, FlatList} from 'react-native'
import {React, useState, useEffect} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import createMealPlan from '../create-meal-plan'
import { Link } from 'expo-router'
import CurrentMeal from '../component/CurrentMeal'
import { SafeAreaView } from 'react-native-safe-area-context';
import MealSpotlight from '../component/MealSpotlight'
import apiClient from '../component/axiosInstance'
import { Image } from 'expo-image'

const Meal = () => {
  const [mealPlan, setMealPlan] = useState([])

  useEffect(() => {
    apiClient.get('/meal/getMealPlan').then((res) => {
      console.log(res.data.data)
      setMealPlan(res.data.data.mealPlan)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-primary px-2 h-full">
      <View className="flex-1">
        <Text className="text-white text-2xl my-2">Current Meal Plan</Text>
        <CurrentMeal />
      </View>
      <View className='flex-1 h-full'>
        <Text className="text-white text-2xl my-2">Meal Plan Spotlight</Text>
        <MealSpotlight />
      </View>
      <View className='flex-1'>
        <Text className="text-white text-2xl mt-8 mb-2">Explore Meal Plan</Text>
        <FlatList
        data={mealPlan}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/meal/[meal]', params: {meal: item._id}}}>
            <View className="mr-2 w-[150px]">
                <Image source={require('../images/mealplan.png')} style={{ width: "100%", height: 100}}/>
                <Text className="text-white">{item.name}</Text>
                
            </View>
          </Link>
          
        )}
        horizontal 
        />
      </View>
      
    </SafeAreaView>
  )
}

export default Meal