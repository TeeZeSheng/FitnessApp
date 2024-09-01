import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import Meal from './Meal';
import { Stack, useLocalSearchParams } from 'expo-router'
import axios from 'axios';
import apiClient from '../component/axiosInstance';
import { Feather } from '@expo/vector-icons';
import { useGlobalContext } from '../context/GlobalProvider';

const MealPage = () => {
  const { meal } = useLocalSearchParams();
    const exercise = [{id: 0, meal: 'Breakfast', food: [{id:1, food: 'MILK'}, {id:2, food: 'egg'}]}, {id: 1, meal: 'Lunch', food: 'eggs'}, {id: 2, meal: 'Dinner', food: 'eggs'}]
    const name = "shreded";
    const {token, setUser} = useGlobalContext();
    const [mealPlan, setMealPlan] = useState([]);

    const saveMeal = () => {
      apiClient.post('/meal/saveMealPlan', {mealPlan: meal}, {headers: {'Authorization': 'Bearer ' + token}}).then((res) => {
        console.log(res.data.data.user)
        setUser(res.data.data.user)
      }).catch((err) => {
        console.log(err.message)
      })
    }

    useEffect(() => { 
    apiClient.get('/meal/getMealPlan').then(function (response) {
      console.log(response.data.data.mealPlan[0].name)
      let res = response.data.data.mealPlan[0];
      // workoutName = res.map( w => {
      //   return w.name
      // })
      setMealPlan(res);
    }).catch(function(error) {
      console.log(error)
    })
  }, [])
  return (
    <View className='bg-primary h-full'>
      <Stack.Screen options={{
        headerTitle: mealPlan.name
      }}/> 
      <View>
        <Image source={require('../images/mealplan.png')} style={{ width: "100%", height: 150}}/>
        {/* <Text style={styles.bottom_left} className="text-xl">{mealPlan.name}</Text> */}
      </View>
      <TouchableOpacity className="border-2 border-sky-500 w-1/4 flex-row justify-center my-2 rounded-md" onPress={saveMeal}>
          <View className="flex flex-row">
            <Text className="text-white text-xl">Save</Text>
            <Feather name="bookmark" size={24} color="white" />
          </View>
      </TouchableOpacity>
      <View className='h-[200px] my-2'>
      <Text className='text-white text-2xl'>Breakfast</Text>
      <FlatList 
        
        data={mealPlan.meal}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          if (item.time === "lunch") {
            return (<View className="h-[200px] w-64 border-2 rounded-xl bg-slate-700 mr-2">
              <Image source={require('../images/mealplan.png')} style={{ width: "100%", height: 100}}/>
              <View className="p-5">
                <Text className="text-white">{item.name}</Text>
                <Text className="text-white">Ingredients: </Text>
              </View>
            </View> )
          }
        }
          
          
        }
        horizontal 
        showsHorizontalScrollIndicator={false}
        />
      </View> 
      <View className='h-28 my-2'>
      <Text className='text-white text-2xl'>Lunch</Text>
      </View> 
      <View className='h-28 my-2'>
      <Text className='text-white text-2xl'>Dinner</Text>
      </View> 
      
      
      
      {/* <FlatList 
      data={exercise}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Meal meal={item}/>
      )}
      /> */}
    </View>
  )
}

export default MealPage

const styles = StyleSheet.create({
  bottom_left: {
    bottom: 8,
    position: 'absolute',
    left: 2
  }
})