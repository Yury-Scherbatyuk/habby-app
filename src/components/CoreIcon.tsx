import React from 'react'

import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { CoreIconsProps } from '../constants'
import { IconLibraries } from '../constants'

interface IconProps {
  icon: CoreIconsProps
  size: number
  color: string
}

export default function CoreIcon({ icon, size, color }: IconProps) {
  const resolveIconLibrary = (library: string) => {
    switch (library) {
      case IconLibraries.Entypo:
        return Entypo
      case IconLibraries.Feather:
        return Feather
      case IconLibraries.AntDesign:
        return AntDesign
      case IconLibraries.Ionicons:
        return Ionicons
      default:
        return AntDesign
    }
  }
  const FontIcon = resolveIconLibrary(icon.library)
  return <FontIcon name={icon.name} size={size} color={color} />
}
