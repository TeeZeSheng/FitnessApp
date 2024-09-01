import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'expo-image'

const ExploreWorkout = ({workoutName}) => {
  return (
    <FlatList
      data={workoutName}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Link href={{ pathname: '/exercise/[ex]', params: {ex: item._id}}}>
        <View className="mr-2 w-[150px]">
            <Image source={require('../images/pushup.jpg')} style={{width: "100%", height: 100}}/>
            <Text className="text-white">{item.name}</Text>
        </View>
        </Link>
      )}
      horizontal 
      />
  )
}

export default ExploreWorkout

const styles = StyleSheet.create({})