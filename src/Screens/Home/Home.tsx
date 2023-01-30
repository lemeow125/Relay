import * as React from 'react';
import {useState} from 'react';
import {Button, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function Home() {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });
  return (
    <>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'black'},
          animatedStyles,
        ]}
      />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}
