
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from '../screens/HomeSreen';
import SettingsScreen from '../screens/SettingsScreen';


const stack = createNativeStackNavigator()

export default function NavigationStack() {
  return (
    <stack.Navigator> //stack de navegacion
        <stack.Screen name='Home' component={HomeSreen}/> //pantallas
        <stack.Screen name='Settings' component={SettingsScreen}/> //pantallas
    </stack.Navigator>
  )
}