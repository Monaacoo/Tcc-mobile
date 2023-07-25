import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack" 

import Home from "./src/screens/Home"
import Agenda from "./src/screens/Agenda"
import Videos from "./src/screens/Videos"

const Stack = createNativeStackNavigator()

export default function App(){
  return <NavigationContainer>

    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>

      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Agenda" component={Agenda}/>
      <Stack.Screen name="Videos" component={Videos}/>

    </Stack.Navigator>
  </NavigationContainer>
}
