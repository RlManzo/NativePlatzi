import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeSreen(props) {
    //objeto navigation de prop
    const {navigation} = props
 const goToSettings = ()=>{
    navigation.navigate("Settings")
 }
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title='ir a settings'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
