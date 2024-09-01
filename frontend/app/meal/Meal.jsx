import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Meal = ({meal}) => {
  return (
    <View className=''>
      <View className={`h-28 my-2`}>

        
        {/* <FlatList 
        data={meal}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="h-[200px] border-2 rounded-xl bg-slate-700">
            <Image src={'https://www.giantfreakinrobot.com/wp-content/uploads/2024/03/timothee-chalamet-dune-part-two-900x506.jpg'} style={{ width: "100%", height: 100}}/>
            <View className="p-5">
              <Text className="text-white">Workout</Text>
              <Text className="text-white">Check out this workout that targets the abs and biceps</Text>
            </View>
          </View>
        )}
        horizontal 
        /> */}

      </View>
    </View>
  )
}

export default Meal

const styles = StyleSheet.create({})