import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login_screen';
import HomeScreen from './screens/home_screen';
import colors from './constants';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ 
            title: 'Notes App',
            headerBackVisible: false,
            headerStyle: { backgroundColor: colors.violet },
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerTitleStyle: { fontSize: 25 },
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
