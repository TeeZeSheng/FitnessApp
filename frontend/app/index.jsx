import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from './context/GlobalProvider'
import { Image } from 'expo-image';

const App = () => {
    const { loading, isLogged } = useGlobalContext();
    console.log(loading)
    if (!loading && isLogged) return <Redirect href={"/workout"} />
    
  return (
    <SafeAreaView className='bg-primary h-full' style={styles.centered}>

            <View className='flex flex-row justify-center my-4'>
                <Text className='text-white text-xl'>GetFit</Text>
            </View>
            <View className='flex flex-row justify-center my-4'>
                <TouchableOpacity className='bg-blue-200 rounded-xl justify-center items-center w-44' onPress={() => router.push('/sign-in')} activeOpacity={0.7}>
                    <Text className=''>Continue with email</Text>
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor='#161622' style='light'/>

        
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
    centered: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
      }, 
})