import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from '../../Styles/Styles';
import NetInfo from '@react-native-community/netinfo';
// @ts-ignore
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';

import { useEffect, useState } from 'react';

export interface props {
  children: React.ReactNode;
}

export default function Background(props: props) {
  const [color, setColor] = useState('black');
  const [previousColor, setPVC] = useState('');

  // Check if connected every 1 second and adjust background accordingly
  const unsubscribe = NetInfo.addEventListener(state => {});
  unsubscribe();
  useEffect(() => {
    const interval = setInterval(() => {
      NetInfo.refresh().then(state => {
        // console.log('Connected to internet? ' + state.isConnected);
        // console.log('Connection type: ' + state.type);
        if (state.isConnected) {
          setPVC(color);
          setColor('#0b2c3f');
        } else {
          setPVC(color);
          setColor('#8a102c');
        }
      });
    }, 750);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <SafeAreaView style={styles.fill_screen}>
      <AnimatedBackgroundColorView
        color={color}
        initialColor={previousColor}
        delay={1000}
        style={styles.fill_screen}>
        <View style={styles.padding} />
        {props.children}
        <View style={styles.padding} />
      </AnimatedBackgroundColorView>
    </SafeAreaView>
  );
}
