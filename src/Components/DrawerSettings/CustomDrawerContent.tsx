import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, Button } from 'react-native';

export default function CustomDrawerContent(props: {}) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <Button title="Home" />
    </DrawerContentScrollView>
  );
}
