import * as React from 'react';
import { Text, Image, View } from 'react-native';
import Background from '../../Components/Background/Background';
import styles from '../../Styles/Styles';

export default function Home() {
  return (
    <Background>
      <View
        style={[
          {
            flex: 1,
            flexDirection: 'row',
          },
          styles.center,
        ]}>
        <Text style={styles.text_large}>Relay </Text>
        <Image
          source={require('../../Assets/App-logo.png')}
          style={{ width: 64, height: 64 }}></Image>
      </View>
    </Background>
  );
}
