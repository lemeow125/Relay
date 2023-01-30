import { View } from 'react-native';
import type { DrawerNavigationOptions } from '@react-navigation/drawer';
const DrawerScreenSettings: DrawerNavigationOptions = {
  headerTitleStyle: { color: 'white', fontSize: 26 },
  headerStyle: { backgroundColor: '#0a0014' },
  headerTintColor: 'white',
  drawerType: 'slide',
  drawerLabelStyle: {
    color: 'white',
  },
  drawerStyle: {
    backgroundColor: '#0a0014',
    width: 260,
  },
  headerRight: () => <View style={{ flexDirection: 'row' }}></View>,
};
export default DrawerScreenSettings;
