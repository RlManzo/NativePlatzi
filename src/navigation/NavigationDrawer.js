import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SettingsScreen from '../screens/SettingsScreen'
import HomeSreen from '../screens/HomeSreen'

const Drawer = createDrawerNavigator()

export default function NavigationDrawer() {
  return (
   <Drawer.Navigator >
      <Drawer.Screen name='Home' component={HomeSreen}/>
      <Drawer.Screen name='Settings' component={SettingsScreen}/>
   </Drawer.Navigator>
  )
}