import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect, router } from 'expo-router';
import apiClient from '../component/axiosInstance';
import { useGlobalContext } from '../context/GlobalProvider';

const SignIn = () => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const [error, setError] = React.useState(false);
  const { loading, isLogged, token, setToken, setUser, user } = useGlobalContext();

  const handleSubmit = () => {
    apiClient.post('/users/login', {

      email: text,
      password: number,

    }).then((res) => {
      console.log(res.data)
      setUser(res.data.user)
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
        <Text className="text-white text-xl">Login to your account</Text>
      </View>
      
      {error ? <Text className="bg-red-300 w-3/4 my-4 mx-4 border-8">Invalid email address or password</Text>: <></>}
      
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
      
      <Text className="text-white px-4">Don't have an account? <Link href={'/sign-up'} className='text-blue-300'>Sign up</Link></Text>
      <View className="my-4">
      <Button title='submit' onPress={handleSubmit}>Submit</Button>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },
});

   
export default SignIn