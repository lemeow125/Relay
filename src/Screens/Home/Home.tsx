import * as React from 'react';
import { Text, Image, View } from 'react-native';
import Background from '../../Components/Background/Background';
import Window from '../../Components/Window/Window';
import styles from '../../Styles/Styles';

export default function Home() {
  return (
    <Background>
      <Window>
        <View style={styles.flex_row}>
          <Text style={styles.text_large}>Relay </Text>
          <Image
            source={require('../../Assets/App-logo.png')}
            style={{ width: 64, height: 64 }}></Image>
        </View>
        <View style={styles.padding} />
      </Window>
    </Background>
  );
}
