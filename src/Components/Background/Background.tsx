import * as React from 'react';
import {SafeAreaView} from 'react-native';
import styles from '../../Styles/Styles';

export interface props {
  children: React.ReactNode;
}

export default function Background(props: props) {
  return <SafeAreaView style={styles.bg}>{props.children}</SafeAreaView>;
}
