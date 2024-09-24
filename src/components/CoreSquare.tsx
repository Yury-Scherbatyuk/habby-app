import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { CoreIconsProps, SquareSizes } from '../constants'
import CoreIcon from './CoreIcon'
import { Colors } from '../colors'

interface CoreSquareType {
  color: string
  size: SquareSizes
  isHighlited: boolean
  icon?: CoreIconsProps | string
  iconSize?: number
  iconColor?: string
  text?: string
}

export default function CoreSquare({
  color,
  size,
  isHighlited,
  icon,
  iconSize,
  iconColor,
  text,
}: CoreSquareType) {
  const getSize = (size: SquareSizes, color: string, isHighlited: boolean) => {
    switch (size) {
      case SquareSizes.Big:
        return {
          width: 42,
          height: 42,
          borderRadius: 13,
          backgroundColor: color,
          borderWidth: isHighlited ? 2 : 0,
          borderColor: Colors.white,
        }
      case SquareSizes.Medium:
        return {
          width: 36,
          height: 36,
          borderRadius: 9,
          backgroundColor: color,
          borderWidth: isHighlited ? 1 : 0,
          borderColor: Colors.white,
        }
      case SquareSizes.Small:
        return {
          width: 12,
          height: 12,
          borderRadius: 3,
          backgroundColor: color,
          borderWidth: isHighlited ? 0.5 : 0,
          borderColor: Colors.white,
        }
    }
  }

  const sizeMap = {
    [SquareSizes.Big]: 38,
    [SquareSizes.Medium]: 28,
    [SquareSizes.Small]: 8,
  }

  const getIcon = (
    icon: CoreIconsProps | undefined | string,
    size: SquareSizes,
    iconColor: string | undefined,
    iconSize?: number,
  ) => {
    const getIconSize = sizeMap[size]
    if (typeof icon === 'string') { // In case icon is string
      return <View // <view> same as below
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Text style={{color:Colors.white, fontSize:16}}>{icon}</Text> 
    </View> 
    }
    if (icon && iconColor) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <CoreIcon
            icon={icon}
            size={iconSize ? iconSize : getIconSize}
            color={iconColor}
          />
        </View>
      )
    }
  }

  return (
    <View style={getSize(size, color, isHighlited)}>
      {getIcon(icon, size, iconColor, iconSize)}
    </View>
  )
}
