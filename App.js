/* eslint-disable no-shadow */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SingUp';
import Home from './Screens/Home';

import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ // To hide Header from all screens
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ // To hide Header from all screens
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default App;