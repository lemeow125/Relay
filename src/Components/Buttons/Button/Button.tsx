import * as React from 'react';
import { Text, Pressable } from 'react-native';
import styles from '../../../Styles/Styles';

export interface props {
  onPress: any;
  title: string;
}
export default function Button(props: props) {
  const { onPress, title } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#0096FF' : '#6495ED' },
        styles.button,
      ]}>
      <Text style={styles.text_small}>{title}</Text>
    </Pressable>
  );
}
