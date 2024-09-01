import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const MealSpotlight = () => {
  return (
    <View className="h-[200px] border-2 rounded-xl bg-slate-700">
      <Image source={require('../images/mealplan.png')} style={{width:"100%", height:110}}/>
      <View className="p-5">
        <Text className="text-white">Workout</Text>
        <Text className="text-white">Check out this workout that targets the abs and biceps</Text>
      </View>
    </View>
  )
}

export default MealSpotlight

const styles = StyleSheet.create({})

//style={{ width: "100%", height: 100}}