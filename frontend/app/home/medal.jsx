import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Medal = () => {
  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <View>
        <Text className='text-gray-100 text-xl'>Quote of the day</Text>
      </View>
      <View>
        <Text className='text-gray-100'>Never let anyone tell you otherwise</Text>
      </View>
        
    </View>
  )
}

export default Medal

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(31 41 55)',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
});