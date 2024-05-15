import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from 'react-native-paper';
import {Provider} from 'react-redux';
import AssetScreen from './screens/Assets/AssetScreen.tsx';
import CreateAsset from './screens/Assets/components/CreateAsset.tsx';
import DetailAssetScreen from './screens/Assets/components/DetailAssetScreen.tsx';
import CategoriesScreen from './screens/Categories/CategoriesScreen.tsx';
import CreateCategory from './screens/Categories/components/CreateCategories.tsx';
import HomeScreen from './screens/HomeScreen.tsx';
import LoginAPITokenScreen from './screens/Login/LoginAPITokenScreen.tsx';
import ModelScreen from './screens/Models/ModelScreen.tsx';
import CreateModel from './screens/Models/components/CreateModel.tsx';
import OtherScreen from './screens/Others/OtherScreen.tsx';
import {QRCode} from './screens/QRCodeScreen.tsx';
import EditProfileScreen from './screens/User/EditProfileScreen.tsx';
import ProfileScreen from './screens/User/ProfileScreen.tsx';
import {store} from './slices/store.ts';
import CreateSupply from './screens/Supply/components/CreateSupply.tsx';
import SuppliersScreen from './screens/Supply/SupplyScreen.tsx';
import StatusScreen from './screens/Status/StatusScreen.tsx';

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

          <Stack.Screen
            name="DetailAssetScreen"
            component={DetailAssetScreen}
          />
          <Stack.Screen name="LoginAPIToken" component={LoginAPITokenScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="AssetScreen" component={AssetScreen} />
          <Stack.Screen name="OtherScreen" component={OtherScreen} />
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
          <Stack.Screen name="ModelScreen" component={ModelScreen} />
          <Stack.Screen name="CreateCategory" component={CreateCategory} />
          <Stack.Screen name="CreateModel" component={CreateModel} />
          <Stack.Screen name="CreateSupply" component={CreateSupply} />
          <Stack.Screen name="SupplyScreen" component={SuppliersScreen} />
          <Stack.Screen name="StatusScreen" component={StatusScreen} />

          <Stack.Screen name="CreateAsset" component={CreateAsset} />
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
        component={ProfileScreen}
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
