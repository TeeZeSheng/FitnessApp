import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import apiClient from './component/axiosInstance'

const customWorkout = () => {
    useEffect(() => {
        apiClient.get()
    }, [])
  return (
    
    <SafeAreaView className="bg-primary h-full">
        <Stack.Screen options={{
            headerTitle: "Custom Workouts"
        }}/>
        <View>
            <Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default customWorkout

const styles = StyleSheet.create({})