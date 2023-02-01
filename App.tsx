import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import History from './src/Screens/History/History';
import Device from './src/Screens/Device/Device';
import Send from './src/Screens/Send/Send';
import Select from './src/Screens/Select/Select';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/Components/DrawerSettings/CustomDrawerContent/CustomDrawerContent';
import DrawerScreenSettings from './src/Components/DrawerSettings/CustomDrawerContent/DrawerScreenSettings/DrawerScreenSettings';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawerContent}
      screenOptions={DrawerScreenSettings}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Device" component={Device} />
      <Drawer.Screen name="Send" component={Send} />
      <Drawer.Screen name="Select" component={Select} />
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
