import { FlatList, StyleSheet, Text, View } from 'react-native'
import {React, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import apiClient from '../component/axiosInstance'
import { useGlobalContext } from '../context/GlobalProvider'
import { usePathname } from 'expo-router'
import { Image } from 'expo-image'

const progress = () => {
    const {user, token} = useGlobalContext();
    const [activity, setActivity] = useState([]);
    const path = usePathname();
    useEffect(() => {
        apiClient.get(`users/getProgress/${user._id}`, {headers: {
            'Authorization': 'Bearer ' + token
        }}).then((res) => {
            console.log(res.data.data.progress.date)
            setActivity(res.data.data.progress)
        }).catch((err) => {
            console.log(err)
        })
    }, [path])
  return (
    <SafeAreaView className="bg-primary h-full px-2">
        <Text className="text-white text-2xl">Activity</Text>
        <FlatList 
        data={activity}
        keyExtractor={(item) => item._id }
        renderItem={({item}) => (
            <View>
                <Text className="text-white text-2xl">{new Date(item.date).toLocaleDateString()}</Text>
                
                <View className="h-[200px] border-2 rounded-xl bg-slate-700">
      <Image source={require('../images/pushup.jpg')} style={{width:"100%", height:110}}/>
      <View className="p-5">
      <Text className="text-white">{item.workoutItems.name}</Text>
        <Text className="text-white">Check out this workout that targets the abs and biceps</Text>
      </View>
    </View>
            </View>
        )}/>
    </SafeAreaView>
  )
}

export default progress

const styles = StyleSheet.create({})