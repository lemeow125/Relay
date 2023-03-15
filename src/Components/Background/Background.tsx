import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from '../../Styles/Styles';
import NetInfo from '@react-native-community/netinfo';
// @ts-ignore
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../../Plugins/Redux/Slices/BackgroundColorSlice/BackgroundColorSlice';

export interface props {
  children: React.ReactNode;
}

export default function Background(props: props) {
  const color = useSelector((state: any) => state.backgroundcolor.value);
  const dispatch = useDispatch();

  // Check if connected every 1 second and adjust background accordingly
  const unsubscribe = NetInfo.addEventListener(state => {});
  unsubscribe();
  useEffect(() => {
    const interval = setInterval(() => {
      NetInfo.refresh().then(state => {
        // console.log('Connected to internet? ' + state.isConnected);
        // console.log('Connection type: ' + state.type);
        if (state.isConnected) {
          dispatch(setColor('#0b2c3f'));
        } else {
          dispatch(setColor('#8a102c'));
        }
      });
    }, 750);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <SafeAreaView style={styles.fill_screen}>
      <AnimatedBackgroundColorView
        color={color}
        delay={1000}
        style={styles.fill_screen}>
        <View style={styles.padding} />
        {props.children}
        <View style={styles.padding} />
      </AnimatedBackgroundColorView>
    </SafeAreaView>
  );
}
