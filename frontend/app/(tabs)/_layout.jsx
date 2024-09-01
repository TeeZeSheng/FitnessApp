import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'




const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
    <Tabs.Screen
      name="home"
      options={{
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerShown: false,
        title: 'Home',
        
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }}
      
    />
    <Tabs.Screen
      name="workout"
      options={{
        headerStyle: {
          backgroundColor: 'green'
        },
        title: 'Workout',
        headerShown: false,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weight-lifter" size={28} color={color} />,
      }}
    />
    <Tabs.Screen
      name="meal"
      options={{
        headerStyle: {
          backgroundColor: 'green'
        },
        title: 'Meal',
        headerShown: false,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="bowl-mix" color={color} />,
      }}
    />
    <Tabs.Screen
      name="progress"
      options={{
        headerStyle: {
          backgroundColor: 'green'
        },
        title: 'Progress',
        headerShown: false,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="progress-check" size={28} color={color} />
      }}
    />
    <Tabs.Screen
      name="account"
      options={{
        headerStyle: {
          backgroundColor: 'green'
        },
        title: 'Account',
        headerShown: false,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={28} color={color} />,
      }}
    />
    
    
    
  </Tabs>
  )
}

export default TabsLayout