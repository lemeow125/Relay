import * as React from 'react';
import { SafeAreaView, Button } from 'react-native';
import styles from '../../Styles/Styles';
import NetInfo from '@react-native-community/netinfo';
// @ts-ignore
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';

import { useEffect, useState } from 'react';
import { State } from 'react-native-gesture-handler';

export interface props {
  children: React.ReactNode;
}

export default function Background(props: props) {
  const [color, setColor] = useState('black');

  // Check if connected every 1 second and adjust background accordingly
  const unsubscribe = NetInfo.addEventListener(state => {});
  unsubscribe();
  useEffect(() => {
    const interval = setInterval(() => {
      NetInfo.refresh().then(state => {
        // console.log('Connected to internet? ' + state.isConnected);
        // console.log('Connection type: ' + state.type);
        if (state.isConnected) {
          setColor('#0b2c3f');
        } else {
          setColor('#8a102c');
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <SafeAreaView style={styles.fill_screen}>
      <AnimatedBackgroundColorView
        color={color}
        initialColor={color}
        style={styles.fill_screen}>
        {props.children}
      </AnimatedBackgroundColorView>
      <Button title="Blue" onPress={() => setColor('#0b2c3f')} />
      <Button title="Red" onPress={() => setColor('#8a102c')} />
    </SafeAreaView>
  );
}
