import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-native-paper'
import { theme } from './core/theme'
import Credit from './screens/Credit'
import Sign from './screens/signup'
import PageValidation from './screens/pageValidation'
import singUp from "./screens/signup";
const Stack = createStackNavigator()
function App() {
  return (

    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signup"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Sign"
          component={singUp}
          options={{
            title: "sign",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        /> 
           <Stack.Screen
          name="Credit"
          component={Credit}
          options={{
            title: "Credit",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        /> 
           <Stack.Screen
          name="PageValidation"
          component={PageValidation}
          options={{
            title: "Credit",
            headerTintColor: "#ed3b45",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

  );
}

export default App;
