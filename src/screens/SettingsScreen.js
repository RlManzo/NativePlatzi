import { View, Text, TextInput, Button , StyleSheet} from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
    const {navigation} = props
    const goToHome = ()=>{
        navigation.navigate("Home") //funcion que nos permite navegar entre screen, luego llamo a la funcion que tiene la opcion de navegar en el onPress.
    }
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={goToHome} title='ir a Home'/> 
    </View>
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
