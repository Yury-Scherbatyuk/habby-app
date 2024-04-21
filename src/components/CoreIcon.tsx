import React from 'react'

import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { CoreIconsProps } from '../constants'

interface IconProps {
  icon: CoreIconsProps
  size: number
  color: string
}

export default function CoreIcon({ icon, size, color }: IconProps) {
  const resolveIconLibrary = (library: string) => {
    switch (library) {
      case 'entypo':
        return Entypo
      case 'feather':
        return Feather
      case 'antdesign':
        return AntDesign
      case 'ionicons':
        return Ionicons
      default:
        return AntDesign
    }
  }
  const FontIcon = resolveIconLibrary(icon.library)
  return <FontIcon name={icon.name} size={size} color={color} />
}
