import * as React from 'react';
import Background from '../../Components/Background/Background';
import styles from '../../Styles/Styles';
import { Text, View } from 'react-native';

export default function Device() {
  return (
    <Background>
      <View style={styles.window}></View>
    </Background>
  );
}
