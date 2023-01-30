import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export interface props
{
  children: React.ReactNode
}
export default function App(props: props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        {props.children}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
