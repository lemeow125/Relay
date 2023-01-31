import { View, Image } from 'react-native';
import type { DrawerNavigationOptions } from '@react-navigation/drawer';
import styles from '../../../../Styles/Styles';
const DrawerScreenSettings: DrawerNavigationOptions = {
  headerTitleStyle: { color: 'white', fontSize: 26 },
  unmountOnBlur: true,
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
  headerRight: () => (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require('../../../../Assets/App-logo.png')}
        style={styles.statusbar_icon}></Image>
    </View>
  ),
};
export default DrawerScreenSettings;
