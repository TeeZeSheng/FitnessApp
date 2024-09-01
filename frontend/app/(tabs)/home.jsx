import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import ScreenHeaderButton from '../search/screenHeaderButton';
import icons from '../../constant/icons';
import UserProgress from '../home/userProgress';
import MealPlan from '../home/mealPlan';
import WorkoutPlan from '../home/workoutPlan';
import Medal from '../home/medal';

import { useGlobalContext } from '../context/GlobalProvider';


//className="container p-2"
const Home = () => {
  const { loading, isLogged, user, token } = useGlobalContext();
  return (
    <SafeAreaView className='bg-primary h-full'>
      {/* <FlatList ListHeaderComponent={() => (
        
      )}>
        
      </FlatList> */}
      <View className="my-6 px-2 space-y-6 flex-1">
          <View className="flex-1">
            <View className="flex-1">
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome Back,
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                {user.name}
              </Text>
              
            </View>
            <View className="flex-2">
              
              <View className='w-full h-32 bg-gray-800 rounded-lg'>
                <Text className="font-pmedium text-xl text-gray-100 absolute bottom-10 left-0 my-4 mx-2">Health Tip</Text>
                <Text className="font-pmedium text-sm text-gray-100 absolute bottom-0 left-0 my-4 mx-2">
                  Stay hydrated: Drink at least 8 glasses of water a day to keep your body energized and functioning optimally.
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1 mt-4">
            
            <Medal />
          </View>
          <View className="flex-1 mt-4">
          
          <UserProgress />
          {/* <View className="bg-white"></View> */}
          </View>
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  big: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 4,
    backgroundColor: 'white',
  }
  
});

export default Home

      {/* <Stack.Screen 
        options={{
          headerLeft: () => (<ScreenHeaderButton iconUrl={icons.menu} dimension="60%"/>),

        }}
      /> */}



    //   <View style={styles.container}>
    //   <ScrollView style={{}}>
    //     <View style={{flex: 1}}>
    //       <Text className="my-2">Welcome, User</Text>

    //     </View>
    //     <View style={{flex: 1}}>
    //       <Text>Explore New</Text>
    //       <Image source={img} style={{ width: "100%", height: 100}}/>
    //     </View>
    //     <View style={{flex: 1, marginTop: 100}}>
    //         <Medal />
    //     </View> 
    //     <View style={{flex: 1, flexDirection: 'column', marginTop: 50}}>
    //       <Text>Recent Activities</Text>
    //       <View>
    //         <UserProgress />
    //       </View>

    //     </View>
    //   </ScrollView>
      
      
    // </View>