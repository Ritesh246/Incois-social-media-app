import { ActivityIndicator,View, Text } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import {hp, wp } from '../helpers/common'

const Loading = ({size="large",color=theme.colors.primary}) => {
  return (
    <View>
      <ActivityIndicator size={size} color={color} style={{marginBottom:hp(3)}}/>
    </View>
  )
}

export default Loading
