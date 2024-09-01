import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ScreenHeaderButton = ({iconUrl}) => {
  return (
    <TouchableOpacity>
        <Image source={iconUrl} resizeMode='cover' />
    </TouchableOpacity>
  )
}

export default ScreenHeaderButton