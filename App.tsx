import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/Components/DrawerSettings/CustomDrawerContent';

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
