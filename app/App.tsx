// In App.tsx in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './slices/store';
import SettingScreen from './screens/SettingScreen';
import LoginBaseURLScreen from './screens/Login/LoginBaseURLScreen';
import LoginAPITokenScreen from './screens/Login/LoginAPITokenScreen';
import LoginQRCodeScreen from './screens/Login/LoginQRCodeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoginBaseURL'}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="LoginBaseURL" component={LoginBaseURLScreen} />
          <Stack.Screen name="LoginAPIToken" component={LoginAPITokenScreen} />
          <Stack.Screen name="LoginQRCode" component={LoginQRCodeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
