import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import DrawerButton from '../../Buttons/DrawerButton/DrawerButton';

export default function CustomDrawerContent(props: {}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerButton goTo="Home" icon={require('../../../Assets/home.png')} />
      <DrawerButton
        goTo="History"
        icon={require('../../../Assets/clipboard-list.png')}
      />
      <DrawerButton
        goTo="Device"
        icon={require('../../../Assets/device-mobile.png')}
      />
    </DrawerContentScrollView>
  );
}
