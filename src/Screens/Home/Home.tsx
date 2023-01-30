import * as React from 'react';
import { Text } from 'react-native';
import Background from '../../Components/Background/Background';

export default function Home() {
  return (
    <Background>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 36,
        }}>
        Testing!
      </Text>
    </Background>
  );
}
