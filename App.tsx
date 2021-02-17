// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './screens/HomeStack';
import Settings from './screens/Settings';
import colors from './styles/colors';


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Drawer.Navigator drawerPosition="right" drawerContentOptions={{activeTintColor: colors.baseColor}}>
            <Drawer.Screen name="HomeStack" component={HomeStack}></Drawer.Screen>
            <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen>

          </Drawer.Navigator>
            {/* <Text>TODO: drawer
             navigation</Text> */}
        </NavigationContainer>
            //todo: navigator
    );
}

