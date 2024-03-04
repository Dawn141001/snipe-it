

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.tsx';
import {Provider} from 'react-redux';
import {store} from './slices/store.ts';
import SettingScreen from './screens/SettingScreen.tsx';
import LoginAPITokenScreen from './screens/Login/LoginAPITokenScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginQRCodeScreen from './screens/Login/LoginQRCodeScreen.tsx';
import DetailAssetScreen from './screens/Assets/components/DetailAssetScreen.tsx';
import { Icon } from 'react-native-paper';
import { QRCode } from './screens/QRCodeScreen.tsx';

const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoginAPIToken'}>
          <Stack.Screen
            name="HomeApp"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen
            name="DetailAssetScreen"
            component={DetailAssetScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="LoginAPIToken" component={LoginAPITokenScreen} />
          <Stack.Screen name="LoginQRCode" component={LoginQRCodeScreen} />
        </Stack.Navigator>
    
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                source={'home'}
                size={30}
                color={focused ? 'blue' : 'black'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="QRCode"
        component={QRCode}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                source={'qrcode'}
                size={30}
                color={focused ? 'blue' : 'black'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                source={'account-box'}
                size={30}
                color={focused ? 'blue' : 'black'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};