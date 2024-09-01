import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import apiClient from './component/axiosInstance'
import { router } from 'expo-router'
import { useGlobalContext } from './context/GlobalProvider'

const EditProfile = () => {
    const {token, user} = useGlobalContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newName, setNewName] = useState('');

    useEffect(() => {
        apiClient.get(`users/getUser/${user._id}`, {headers: {
            'Authorization': 'Bearer ' + token
        }}).then((res) => {
            console.log(`res ${res.data.data}`)
            setName(res.data.data.user.name)
            setEmail(res.data.data.user.email)
        })
    }, [])

    const handleSubmit = () => {
        apiClient.patch('users/updateData',{name: name, email: email}, {headers: {
            'Authorization' : 'Bearer ' + token
        }}).then((res) => {
            router.back();
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="px-4">
        <Text className="text-white text-2xl">Edit Profile</Text>
      </View>
      
      
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='Name'
 
        

      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        
      />
      
      <View className="my-4">
      <Button title='submit' onPress={handleSubmit}>Submit</Button>
      </View>
      
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
      },
})