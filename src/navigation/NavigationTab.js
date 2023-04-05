import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeSreen from '../screens/HomeSreen'
import SettingsScreen from '../screens/SettingsScreen'
const Tab = createBottomTabNavigator() 

export default function NavigationTab() {
  return (
    <Tab.Navigator>
       <Tab.Screen name='Home' component={HomeSreen}/>
       <Tab.Screen name='Settings' component={SettingsScreen}/>
    </Tab.Navigator>
  )
}