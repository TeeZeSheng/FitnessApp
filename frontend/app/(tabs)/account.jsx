import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import { useGlobalContext } from '../context/GlobalProvider';
import { router } from 'expo-router';

const Account = () => {
  const {user} = useGlobalContext();
  return (
    <SafeAreaView className="px-2 bg-primary h-full">
      <View className="flex flex-row justify-center my-4">
        <View className="w-[140px] h-[140px] rounded-full bg-black flex justify-center ">
        <Text className='text-white text-center text-3xl'>{user.name[0]}</Text>
        </View>
      </View>
      <View className="flex flex-row my-2">
      <Text className="text-white text-xl mr-2">Name</Text>
      <FontAwesome name="pencil" size={20} color="white" />
      </View>
      <Text className="text-white">{user.name}</Text>
      <View className="w-full h-0.5 bg-slate-400"/>
      <View className="flex flex-row my-2">
      <Text className="text-white text-xl mr-2">Email</Text>
      <FontAwesome name="pencil" size={20} color="white" />
      </View>
      <Text className="text-white">{user.email}</Text>
      <View className="w-full h-0.5 bg-slate-400"/>

      
      <View className='my-4'>
        <Button title='Edit' color={'blue'} onPress={() => {router.push('/editProfile')}}/>
      </View>
      <View className='my-4'>
        <Button title='Logout' color={'red'} onPress={() => {router.push('/')}}/>
      </View>
      
      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    

  }
})

export default Account