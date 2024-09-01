import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '../context/GlobalProvider'
import apiClient from '../component/axiosInstance'
import { router } from 'expo-router'
const SignUp = () => {
  const [name, onChangeName] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [passwordConfirm, onChangePasswordConfirm] = React.useState('');
  const [error, setError] = React.useState(false);
  const { loading, isLogged, token, setToken, setUser, user } = useGlobalContext();

  const handleSubmit = () => {
    apiClient.post('/users/signup', {
      name: name,
      email: text,
      password: number,
      passwordConfirm: passwordConfirm,
    }).then((res) => {
      console.log(res.data.data)
      setUser(res.data.data.user)
      setToken(res.data.token)
      router.replace('/home')
    }).catch(function (err) {
      setError(true)
    })

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="px-4">
        <Text className="text-white text-2xl">GetFit</Text>
        <Text className="text-white text-xl">Create an account</Text>
      </View>
      {error ? <Text>error</Text>: <></>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder='Name'

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Email'

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePasswordConfirm}
        value={passwordConfirm}
        placeholder="Confirm Password"
        
      />
 
      <Button title='Create Account' onPress={handleSubmit}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
});

export default SignUp