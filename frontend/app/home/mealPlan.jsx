import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealPlan = () => {
  return (
    <View className="w-1/2">
        <Text>Current Meal Plan</Text>
        <View className='bg-lime-100 w-9/12'>
            <Text>
                Breakfast
            </Text>
            <Text>
                Lunch
            </Text>
            <Text>
                Dinner
            </Text>
        </View>
    </View>
  )
}

export default MealPlan

const styles = StyleSheet.create({})