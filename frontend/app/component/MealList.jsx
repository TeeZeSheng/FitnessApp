import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealList = ({meal}) => {
  return (
    <View className="mr-4">
        <View className="w-[200px] h-[200px] bg-black">
            <Text className="text-white">{meal.mealType}</Text>
        </View> 
    </View>
    

    
  )
}

export default MealList

const styles = StyleSheet.create({})