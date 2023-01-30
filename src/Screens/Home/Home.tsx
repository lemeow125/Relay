import * as React from 'react';
import {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function Home() {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });
  useEffect(() => {
    offset.value = withSpring(Math.random());
  }, []);
  return (
    <>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'black'},
          animatedStyles,
        ]}
      />
      <Button
        onPress={() => (offset.value = withSpring(Math.random()))}
        title="Move"
      />
    </>
  );
}
