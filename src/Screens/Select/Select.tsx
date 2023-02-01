import * as React from 'react';
import { Text } from 'react-native';
import Background from '../../Components/Background/Background';
import Window from '../../Components/Window/Window';
import styles from '../../Styles/Styles';

export default function Select() {
  return (
    <Background>
      <Window>
        <Text style={styles.text_medium}>Selected file</Text>
      </Window>
    </Background>
  );
}
