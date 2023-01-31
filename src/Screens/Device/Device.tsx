import * as React from 'react';
import Background from '../../Components/Background/Background';
import styles from '../../Styles/Styles';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useState } from 'react';

export default function Device() {
  let brand = DeviceInfo.getBrand();
  let [name, setName] = useState('');

  DeviceInfo.getDeviceName().then(deviceName => {
    setName(deviceName);
  });
  return (
    <Background>
      <View style={styles.window}>
        <Text style={styles.text_small}>Device Brand: {brand}</Text>
        <Text style={styles.text_small}>Device Name: {name}</Text>
      </View>
    </Background>
  );
}
