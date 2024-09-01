import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exercise = ({exercise}) => {
  console.log(exercise)
  return (
    <View className='px-2'>
        <View className='h-20 w-full border border-slate-600 rounded-md my-2 px-2 py-4'>
            <Text className='text-white text-2xl'>{exercise.name}</Text>
            <Text className='text-white text-l'>{exercise.type} reps</Text>
        </View>
    </View>
    
  )
}

export default Exercise

const styles = StyleSheet.create({})