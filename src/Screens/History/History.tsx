import * as React from 'react';
import { Text, View } from 'react-native';
import Background from '../../Components/Background/Background';
import Window from '../../Components/Window/Window';
import styles from '../../Styles/Styles';

export default function History() {
  return (
    <Background>
      <Window>
        <Text style={styles.text_medium}>History!</Text>
      </Window>
    </Background>
  );
}
