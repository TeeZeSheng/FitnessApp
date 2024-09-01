import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import icons from '../../constant/icons'
import { Image } from 'expo-image'



const WorkoutSpolight = () => {
  return (
    <View className="h-[200px] border-2 rounded-xl bg-slate-700">
      <Image source={require('../images/pushup.jpg')} style={{width:"100%", height:110}}/>
      <View className="p-5">
        <Text className="text-white">Workout</Text>
        <Text className="text-white">Check out this workout that targets the abs and biceps</Text>
      </View>
    </View>
  )
}

export default WorkoutSpolight

const styles = StyleSheet.create({
    spotlight: {
        width: '100',
        height: '50%',
    }
})