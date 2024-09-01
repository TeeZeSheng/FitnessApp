import { View, Text, FlatList,StyleSheet, Image, TouchableHighlight, Button } from 'react-native'
import {React, useState, useEffect} from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../component/FormField';
import icons from '../../constant/icons';
import WorkoutList from '../component/WorkoutList';
import WorkoutSpolight from '../component/WorkoutSpolight';
import ExploreWorkout from '../component/ExploreWorkout';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllWorkout from '../component/AllWorkout';
import WorkoutHome from '../component/WorkoutHome';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WorkoutHome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="AllWorkout" component={AllWorkout} options={{headerBackTitle: "workout", headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack
